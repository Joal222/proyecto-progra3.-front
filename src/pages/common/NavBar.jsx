// src/pages/common/NavBar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, useDisclosure } from "@nextui-org/react";
import { FiLogOut } from 'react-icons/fi';
import { AuthContext } from "../../context/authContext";
import Auth from "../../components/auth/Auth";

function NavBar() {
  const { isOpen: isOpenLogin, onOpen: onOpenLogin, onClose: onCloseLogin } = useDisclosure(false);
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <>
      <Navbar className="bg-background/05 backdrop-saturate-110 navbar">
        <NavbarBrand>
          <Link to="/" className="page-link">El Avionazo</Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem>
            <Link to="/crear-vuelos" className="page-link">Vuelos</Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link to="/customers" className="page-link">Hoteles</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/buscar-vuelos" className="page-link">Consultar Vuelo</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex items-center">
            {user ? (
              <>
                <span className="page-link">Hola, {user.email}</span>
                <button onClick={handleLogout} className="ml-4">
                  <FiLogOut size={24} />
                </button>
              </>
            ) : (
              <a href="#" className="page-link" onClick={(e) => { e.preventDefault(); onOpenLogin(); }}>Login</a>
            )}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Auth isOpen={isOpenLogin} onOpenChange={onCloseLogin} />
    </>
  );
}

export default NavBar;
