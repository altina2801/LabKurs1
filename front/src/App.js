import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Sessions from './components/Sessions';
import DropdownList from './components/DropdownList';
import SessionB from './components/SessionB';
import Professionals from './components/professionals';
import AddEditTherapist from './components/professionalsAddEdit';
import Payment from './components/payments';
import Profile from './components/profile';
import TherapistRegister from './components/TherapistRegister';
import ChatBox from './components/chatbox';
import UserProfile from './components/userProfile';
import ProfileEdit from './components/profileedit';
import SessionForm from './components/sessionForm';
import AdminDashboard from './components/AdminDashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer position="top-center" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userProfile/:id" element={<UserProfile />} />
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
          <Route path="/updateTherapist/:id" element={<AddEditTherapist />} />
          <Route path="/sessionB" element={<SessionB />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile/:professionals_id" element={<Profile />} />
          <Route path="/profile/:professionals_id/sessionForm" element={<SessionForm />} />
          <Route path="/therapistregister" element={<TherapistRegister />} />
          <Route path="/chatbox" element={<ChatBox />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/profileedit" element={<ProfileEdit />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
