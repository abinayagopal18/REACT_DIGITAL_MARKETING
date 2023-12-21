import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Index/Main';
import { AuthProvider } from './LoginSignup/AuthContext';
import SignIn from './LoginSignup/SignIn';
import Login from './LoginSignup/Login';

export default function App() {
  return (
    <div>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login/> } />
          <Route path="/signin" element={<SignIn/> } />
          <Route path="/main" element={<Main/> } />
        </Routes>
      </AuthProvider>
    </Router>
    </div>
  );
}
