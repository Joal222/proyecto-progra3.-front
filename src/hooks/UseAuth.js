import { useState } from 'react';
import { signUp, login } from '../services/authService'; // Asegúrate de importar correctamente
import  AlertToastify from './AlertToastify'



export const useAuth = (onOpenChange) => {
  const [selected, setSelected] = useState("login");
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [signUpData, setSignUpData] = useState({
    pasaporte: "",
    nombres: "",
    apellidos: "",
    fechaNacimiento: "",
    nation: "",
    email: "",
    codigoAreaPais: "",
    tel: "",
    telEmergencias: "",
    direccion: "",
    password: ""
  });
  const [error, setError] = useState("");

  
  // Validaciones
  const validateEmail = (email) => {
    return email.includes('@');
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleInputChange = (event, type) => {
    const { name, value } = event.target;
    if (name === 'email' || name === 'password') {
        setError(''); // Limpiar errores para campos específicos
    }
    if (type === 'login') {
      setLoginData(prev => ({ ...prev, [name]: value }));
    } else {
      setSignUpData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
     // Ejecutar validaciones
     if (!validateEmail(signUpData.email)) {
        setError("Por favor introduce un correo electrónico válido.");
        return;
      }
      if (!validatePassword(signUpData.password)) {
        setError("La contraseña debe tener al menos 6 caracteres.");
        return;
      }

    try {
      const data = await signUp(signUpData);
      console.log("Registration Successful", data);
      AlertToastify('success','Usuario Creado')
      onOpenChange(false);
      setError('');
    } catch (error) {
      setError("Registration Failed: " + error.message);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!validateEmail(loginData.email) || !validatePassword(loginData.password)) {
        setError("Correo electrónico o contraseña inválidos.");
        return;
      }
  
    try {
      const response = await login(loginData);
      console.log("Login successful", response);
      onOpenChange(false);
      AlertToastify('success','Logueado Exitosamente')
    } catch (error) {
      setError("Login Failed: " + (error.response?.data?.message || 'Failed to login'));
    }
  };

  return {
    selected, setSelected,
    loginData, signUpData,
    error,
    handleInputChange,
    handleSignUp,
    handleLogin
  };
}
