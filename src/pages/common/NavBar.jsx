import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, useDisclosure } from "@nextui-org/react";
import Auth from "../../components/auth/Auth";
import '../../styles/common/NavBar.css';

function NavBar() {
  const { isOpen: isOpenLogin, onOpen: onOpenLogin, onOpenChange: onOpenChangeLogin } = useDisclosure();
  
  return (
    <>
      <Navbar className="bg-background/05 backdrop-saturate-110 navbar" >
        <NavbarBrand>
          <Link to="/" className="page-link">El Avionazo</Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem>
            <Link to="/crear-vuelos" className="page-link">Vuelos</Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link to="/customers" className="page-link">
              Hoteles
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/buscar-vuelos" className="page-link">
              Consultar Vuelo
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <a href="#" className="page-link" onClick={(e) => { e.preventDefault(); onOpenLogin(); }}>Login</a>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Auth isOpen={isOpenLogin} onOpenChange={onOpenChangeLogin} />
    </>
  );
}

export default NavBar;
