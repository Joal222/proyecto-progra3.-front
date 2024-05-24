// src/context/authContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

// Función para decodificar el token JWT
const decodeToken = (token) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const jwtToken = localStorage.getItem('token');
    if (jwtToken) {
      const decodedToken = decodeToken(jwtToken);
      if (decodedToken && new Date(decodedToken.exp * 1000) > new Date()) {
        setUser({ email: decodedToken.sub });
      } else {
        localStorage.removeItem('token');
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
