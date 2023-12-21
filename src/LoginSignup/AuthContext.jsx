import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const login = (email, password, history) => {
    if (email === 'example@email.com' && password === 'password') {
      setLoggedIn(true);
      history.push('/main');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <AuthContext.Provider value={{ loggedIn, error, login }}>
      {children}
    </AuthContext.Provider>
  );
};
