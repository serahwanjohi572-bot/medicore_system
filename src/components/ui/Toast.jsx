import React, { useEffect } from 'react';

/**
 * Reusable, theme-consistent toast.
 * Props:
 * - show: boolean
 * - type: 'success' | 'error' | 'info'
 * - message: string | ReactNode
 * - onClose: () => void (optional)
 * - autoHideMs: number (optional)
 */
const Toast = ({ show, type = 'info', message, onClose, autoHideMs = 2500 }) => {
  useEffect(() => {
    if (!show) return;
    if (typeof autoHideMs !== 'number' || autoHideMs <= 0) return;
    const t = window.setTimeout(() => {
      onClose?.();
    }, autoHideMs);
    return () => window.clearTimeout(t);
  }, [show, autoHideMs, onClose]);

  if (!show) return null;

  const iconClass =
    type === 'success'
      ? 'fas fa-check-circle'
      : type === 'error'
        ? 'fas fa-triangle-exclamation'
        : 'fas fa-circle-info';

  return (
    <div className={`hb-toast ${type}`} role="status" aria-live="polite">
      <i className={`${iconClass} hb-toast-icon`} aria-hidden="true" />
      <div className="hb-toast-message">{message}</div>
      {onClose && (
        <button className="hb-toast-close" type="button" onClick={onClose} aria-label="Close">
          <i className="fas fa-xmark" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default Toast;

