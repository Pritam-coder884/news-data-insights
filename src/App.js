
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Accordian from './Components/Common/Accordian';
import PaymentPlan from './Components/Common/Card/PaymentPlan';
import LoginPage from './Pages/Auth/LoginPage';
import Signup from './Pages/Auth/Signup';
import Homepage from './Pages/Homepage';
import LandingPage from './Pages/LandingPage/LandingPage';
import UserDetails from './Pages/UserDetails';
import Layout from './Routes/Layout';
import RequireAuth from './Routes/RequireAuth';
import Setting from "./Pages/Setting/Setting";
import Analytics from "./Pages/Analytics/Analytics";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/userDetail" element={<UserDetails />} />
        <Route path="/pricing" element={<PaymentPlan />} />
        <Route path="/home" element={<LandingPage />}></Route>
        <Route path="/acc" element={<Accordian/>}/>

        <Route element={<RequireAuth />}>
            <Route path="/" element={<Layout />}>
            <Route path='homepage' element={<Homepage/>}/>
            <Route path="/setting" element={<Setting />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
