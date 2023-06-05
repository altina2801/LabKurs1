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
import BrowseTherapists from './components/BrowseTherapists';
import Sessions from './components/Sessions'
import DropdownList from './components/DropdownList';
import SessionB from './components/SessionB'
import Professionals from './components/professionals';
import AddEditTherapist from './components/professionalsAddEdit';
import Payment from './components/payments';
import Profile from './components/profile';
import TherapistRegister from './components/TherapistRegister';

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
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/browsetherapists" element={<BrowseTherapists />} />
          <Route path="/dropdownlist" element={<DropdownList />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/addTherapist" element={<AddEditTherapist />} />
          <Route path={`/updateTherapist/:id`} element={<AddEditTherapist />} />
          <Route path="/sessionB" element={<SessionB />} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/therapistregister" element={<TherapistRegister/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;