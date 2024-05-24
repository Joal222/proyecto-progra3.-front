import { useState, useContext } from "react";
import { signUp, login } from "../services/authService";
import { AuthContext } from "../context/authContext";

export const useAuth = (onOpenChange) => {
  const { setUser } = useContext(AuthContext);
  const [selected, setSelected] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({ nombres: "", apellidos: "", email: "", password: "" });
  const [error, setError] = useState(null);

  const handleInputChange = (e, form) => {
    const { name, value } = e.target;
    if (form === "login") {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setSignUpData({ ...signUpData, [name]: value });
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(signUpData);
      onOpenChange(false);
      toast.success('User registered successfully!');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      setUser({ email: loginData.email }); // Actualiza el contexto con la información del usuario
      onOpenChange(false);
      toast.success('Login successful!');
    } catch (error) {
      setError(error.message);
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
};
