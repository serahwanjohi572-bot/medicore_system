import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddProduct from './components/AddProducts';
import GetProduct from './components/GetProducts';
import Mpesapayment from './components/MpesaPayment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header bg-primary">
          <h1 className='display-3 text-centre text-centre p-3 fw-bold text-light'>Medicore Services </h1>
        </header>
        <NavBar/>
        {/*create your own routes*/}
        <Routes>
          {/*map a single route*/}
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/addproduct" element={<AddProduct/>} />
          <Route path="/" element={<GetProduct/>} />
          <Route path="/mpesapayment" element={<Mpesapayment/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
