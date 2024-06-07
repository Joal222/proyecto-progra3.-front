import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { FiLogOut } from 'react-icons/fi';
import { AuthContext } from "../../context/authContext";
import { useAuthModal } from '../../context/AuthModalContext';
import AuthModal from "../../components/auth/Auth";

function NavBar() {
  const { openAuthModal } = useAuthModal();
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <>
      <Navbar className="bg-background/01 backdrop-saturate-110 navbar text-black flex justify-around">
        <NavbarBrand className='text-8xl'>
          <Link to="/" className="page-link text-4xl">El Avionazo</Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-8 text-6xl" justify="center">
          <NavbarItem>
            <Link to="/dashBoard" className="page-link text-2xl">Vuelos</Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link to="/comprar-boleto" className="page-link text-2xl">Hoteles</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/buscar-vuelos" className="page-link text-2xl">Consultar Vuelo</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex items-center">
            {user ? (
              <>
                <span className="page-link text-1xl">{user.email}</span>
                <button onClick={handleLogout} className="ml-4">
                  <FiLogOut size={24} />
                </button>
              </>
            ) : (
              <a href="#" className="page-link text-2xl" onClick={(e) => { e.preventDefault(); openAuthModal(); }}>Login</a>
            )}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <AuthModal />
    </>
  );
}

export default NavBar;
