import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import AboutUs from './components/aboutus';
import RegisterB from './components/registerB';
import AddEdit from './components/addEdit';
import View from './components/view';
import RegistrationPage from './components/RegistrationPage';
import Quiz from './components/Quiz';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer positon ="top-center"/>
      </BrowserRouter>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerB" element={<RegisterB />} />
          <Route path="/addUser" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/registrationpage" element={<RegistrationPage />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
