import React from 'react';
import './App.css';
import Login from './component/Login';
import { Route, Routes } from 'react-router-dom';
import Otpscreen from './component/Otpscreen';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<Otpscreen />} />
        {/*  <Route path="/live" element={<Live />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
