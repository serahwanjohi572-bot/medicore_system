import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddProduct from './components/AddProducts';

import ProductDetails from './components/ProductDetails';

import UserProfile from './components/UserProfile';
import MpesaPayment from './components/MpesaPayment';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import HealthTips from './components/HealthTips';
import Appointment from './components/Appointment';
import Checkout from './components/Checkout';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import GetProducts from './components/GetProducts';
import About from './components/About';
import SupportChatbot from './components/Chatbot/SupportChatbot';
import LandingPage from './components/LandingPage';
// Temporary debug — paste at top of App() function
const _orig = localStorage.setItem.bind(localStorage);
localStorage.setItem = (k, v) => {
  if (k === 'cart' || k === 'wishlist') {
    console.trace(`localStorage.setItem("${k}", ${v})`);
  }
  _orig(k, v);
};
function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex flex-column min-vh-100">
        <header className="bg-primary text-white py-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <div className="logo-container me-3">
                    <i className="fas fa-heartbeat text-white" style={{fontSize: '2.5rem'}}></i>
                  </div>
                  <div>
                    <h1 className="h2 mb-0 fw-bold text-white" style={{fontFamily: 'Arial, sans-serif', letterSpacing: '1px'}}>
                      Health Bridge
                    </h1>
                    <p className="mb-0 small text-light" style={{fontStyle: 'italic'}}>
                      👉 Connecting You to Better Healthcare
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-lg-end mt-2 mt-lg-0">
                <div className="d-flex justify-content-lg-end align-items-center">
                  <div className="me-3">
                    <i className="fas fa-phone text-white me-2"></i>
                    <span className="small">+254 700 000 000</span>
                  </div>
                  <div>
                    <i className="fas fa-clock text-white me-2"></i>
                    <span className="small">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <NavBar/>
        {/*create your own routes*/}
        <div className="flex-grow-1">
          <Routes>
            {/*map a single route*/}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/health-tips" element={<HealthTips />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/mpesapayment" element={<MpesaPayment />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer/>
        <SupportChatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;
