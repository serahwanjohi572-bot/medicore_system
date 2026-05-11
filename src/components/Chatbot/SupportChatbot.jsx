import React, { useEffect, useMemo, useRef, useState } from 'react';
import './supportChatbot.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const QUICK_REPLIES = [
  { label: 'Show painkillers', text: 'Show painkillers' },
  { label: 'Track my order', text: 'Track my order' },
  { label: 'Book appointment', text: 'Book appointment' },
  { label: 'How do I place an order?', text: 'How do I place an order?' },
];

const PRODUCT_API = 'https://serahswala.alwaysdata.net/api/get_product_details';

const MEDICINE_KEYWORDS = [
  'painkiller',
  'pain killers',
  'paracetamol',
  'ibuprofen',
  'aspirin',
  'headache',
  'fever',
  'cold',
  'cough',
  'aspirin',
];

const KNOWN_INTENTS = [
  {
    id: 'order_place',
    test: (msg) => /\b(place|make)\s+(an\s+)?order\b|\bhow\s+to\s+order\b|\bcheckout\b/.test(msg),
    respond: () =>
      'To place an order: browse medicines on the Home page, add items to Cart, then go to Checkout and complete payment via M-Pesa.',
  },
  {
    id: 'appointment_book',
    test: (msg) => /\bbook\b.*\bappointment\b|\bappointment\b.*\bbook\b|\bmake\b.*\bappointment\b/.test(msg),
    respond: () =>
      'To book an appointment: open the Appointment page, choose a doctor, then pick a date and time slot, and confirm your details.',
  },
  {
    id: 'order_status',
    test: (msg) => /\bwhere\b.*\b(order|delivery)\b|\btrack\b|\bstatus\b.*\border\b/.test(msg),
    respond: () =>
      'For order status: check your Cart/Checkout screen for the latest updates. If you still need help, contact support (we can guide you to the right step).',
  },
  {
    id: 'medicine_general',
    test: (msg) =>
      /\bheadache\b|\bmigraine\b|\bfever\b|\bcold\b|\bpain\b|\bpainkiller\b|\bparacetamol\b|\bibuprofen\b|\baspirin\b|\bmedicine\b|\bmedication\b/.test(msg),
    respond: () =>
      [
        'For general comfort, some people use over-the-counter pain relievers like paracetamol or ibuprofen (depending on their situation).',
        'This is not medical advice. Consult a healthcare professional for guidance, especially if you have allergies, stomach issues, kidney disease, are pregnant, or take other medicines.',
        'Tell me what you want help with: ordering medicines, or booking a doctor appointment?',
      ].join('\n'),
  },
];

function normalizeMessage(s) {
  return (s || '').toLowerCase().trim();
}

const buildAssistantWelcome = () =>
  [
    'Hi 👋 I’m Health Bridge Support.',
    'I can help with orders, appointments, and general guidance on medicines (not diagnosis).',
    'How can I help you today?',
  ].join('\n');

const SupportChatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(() => [
    { id: 'welcome', role: 'assistant', text: buildAssistantWelcome() },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const listRef = useRef(null);
  const inputRef = useRef(null);

  const intents = useMemo(() => KNOWN_INTENTS, []);
  const navigate = useNavigate();

  const [productIndex, setProductIndex] = useState([]);
  const [productLoading, setProductLoading] = useState(false);

  const ensureProductsLoaded = async () => {
    if (productIndex.length > 0 || productLoading) return;
    setProductLoading(true);
    try {
      const response = await axios.get(PRODUCT_API);
      setProductIndex(response.data || []);
    } catch {
      // Keep chatbot responsive even if API fails
      setProductIndex([]);
    } finally {
      setProductLoading(false);
    }
  };

  const extractMedicineQuery = (userMsg) => {
    const raw = (userMsg || '').toLowerCase();
    const wantsPainkillers = /\b(painkillers?|pain\s+killers)\b/.test(raw);
    if (wantsPainkillers) return 'painkiller';

    const hit = MEDICINE_KEYWORDS.find((k) => new RegExp(`\\b${k.replace(/\s+/g, '\\s+')}\\b`, 'i').test(raw));
    return hit || '';
  };

  const findMedicineProducts = (query) => {
    if (!query) return [];
    const q = query.toLowerCase();
    const ranked = productIndex
      .map((p) => {
        const name = (p.product_name || '').toLowerCase();
        const desc = (p.product_description || '').toLowerCase();
        const nameScore = name.includes(q) ? 3 : 0;
        const descScore = desc.includes(q) ? 1 : 0;
        return { p, score: nameScore + descScore };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score);

    return ranked.slice(0, 6).map((x) => x.p);
  };

  useEffect(() => {
    if (!open) return;

    const t = window.setTimeout(() => inputRef.current?.focus?.(), 50);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo?.({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open, isTyping]);

  const addMessage = (role, text) => {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, role, text },
    ]);
  };

  const addAssistantPayload = (payload) => {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, role: 'assistant', text: payload },
    ]);
  };


  const respond = (userText) => {
    const msg = normalizeMessage(userText);


    // Simple intent matching
    const matched = intents.find((it) => it.test(msg));

    if (matched) {
      const res = matched.respond();
      return res;
    }

    // Medicine product search (in-chat cards)
    const medicineQuery = extractMedicineQuery(userText);
    if (medicineQuery) {
      const results = findMedicineProducts(medicineQuery);
      return { type: 'medicine_results', query: medicineQuery, results };
    }


    // Medicine safety: if user explicitly asks about medicines, keep it general
    if (/\b(headache|pain|fever|cough|cold|paracetamol|ibuprofen|aspirin)\b/.test(msg)) {
      return [
        'I can share general options, but I can’t diagnose or tell you what to take for your specific condition.',
        'This is not medical advice. Consult a healthcare professional.',
        'If you want, I can also guide you to book an appointment or find the right medicine on our site.',
      ].join('\n');
    }

    return 'I can help with orders and appointment booking. What would you like to do?';
  };

  const handleSend = async (text) => {
    const trimmed = (text || '').trim();
    if (!trimmed) return;

    addMessage('user', trimmed);
    setInput('');
    setIsTyping(true);

    window.setTimeout(() => {
      const reply = respond(trimmed);

      if (reply?.type === 'medicine_results') {
        // Ensure we have the product list before rendering cards
        ensureProductsLoaded().finally(() => {
          const results = Array.isArray(reply.results) ? reply.results : [];
          const safeResults = results.filter(Boolean).slice(0, 6);
          addAssistantPayload({
            kind: 'medicine_results',
            query: reply.query,
            results: safeResults,
          });
          setIsTyping(false);
        });
        return;
      }

      // Redirect "book appointment"
      if (typeof reply === 'string' && /appointment/i.test(trimmed) && /book|make/i.test(trimmed)) {
        addMessage('assistant', 'Redirecting you to appointment booking…');
        setIsTyping(false);
        navigate('/appointment');
        return;
      }

      // Appointment handling is done via intent matching / redirect above.
      // No-op block removed to avoid referencing an out-of-scope variable.


      addMessage('assistant', reply);
      setIsTyping(false);
    }, 550);
  };

  const handleQuickReply = (text) => {
    if (!open) setOpen(true);
    handleSend(text);
  };

  return (
    <div className="support-chatbot-root" aria-live="polite">
      {!open && (
        <button
          type="button"
          className="support-chatbot-fab"
          onClick={() => setOpen(true)}
          aria-label="Open support chat"
          title="Chat with support"
        >
          <i className="fas fa-comment-dots" />
        </button>
      )}

      {open && (
        <div className="support-chatbot-panel" role="dialog" aria-modal="false" aria-label="Support chat">
          <div className="support-chatbot-header">
            <div className="support-chatbot-header-left">
              <span className="support-chatbot-badge">24/7 Support</span>
              <div className="support-chatbot-title">Health Bridge Assistant</div>
            </div>
            <button type="button" className="support-chatbot-close" onClick={() => setOpen(false)} aria-label="Close chat">
              ×
            </button>
          </div>

          <div className="support-chatbot-body" ref={listRef}>
            {messages.map((m) => (
              <div key={m.id} className={`support-chatbot-msg support-chatbot-msg-${m.role}`}>
                {typeof m.text === 'string' ? (
                  <div className="support-chatbot-bubble">{m.text}</div>
                ) : m.text?.kind === 'medicine_results' ? (
                  <div className="support-chatbot-bubble support-chatbot-medicine-bubble">
                    <div className="support-chatbot-medicine-title">
                      Medicines for “{m.text.query}”
                    </div>
                    {m.text.results?.length ? (
                      <div className="support-chatbot-medicine-cards">
                        {m.text.results.map((p) => (
                          <div key={p.product_id} className="support-chatbot-medicine-card">
                            <div className="support-chatbot-medicine-name">{p.product_name}</div>
                            <div className="support-chatbot-medicine-meta">
                              KES {Number(p.product_cost).toLocaleString()}
                            </div>
                            <Link
                              to={`/product/${p.product_id}`}
                              state={{ product: p }}
                              className="support-chatbot-medicine-link"
                            >
                              View
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="support-chatbot-medicine-empty">
                        No matches found. Try another name (e.g., paracetamol).
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="support-chatbot-bubble">{JSON.stringify(m.text)}</div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="support-chatbot-msg support-chatbot-msg-assistant">
                <div className="support-chatbot-bubble support-chatbot-typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            <div className="support-chatbot-quickreplies" aria-label="Quick replies">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q.text}
                  type="button"
                  className="support-chatbot-quickreply"
                  onClick={() => handleQuickReply(q.text)}
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          <form
            className="support-chatbot-footer"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
          >
            <input
              ref={inputRef}
              className="support-chatbot-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about orders, appointments, or medicines..."
            />
            <button type="submit" className="support-chatbot-send" aria-label="Send message">
              <i className="fas fa-paper-plane" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SupportChatbot;

