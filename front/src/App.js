import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import AboutUs from './components/aboutus';
import RegisterB from './components/registerB';
import AddEdit from './components/addEdit';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registerB" element={<RegisterB />} />
          <Route path="/addEdit" element={<AddEdit/>} />
          <Route path="/update/:id" element={<AddEdit/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
