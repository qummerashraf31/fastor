import React from 'react';
import './App.css';
import Login from './component/Login';
import { Route, Routes } from 'react-router-dom';
import Otpscreen from './component/Otpscreen';
import Description from './component/Description';
import List from './component/List';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<Otpscreen />} />
        <Route path="/list" element={<List />} />
        <Route path="/description" element={<Description />} />

      </Routes>
    </div>
  );
}

export default App;