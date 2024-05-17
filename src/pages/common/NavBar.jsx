import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, useDisclosure } from "@nextui-org/react";
import Auth from "../../components/auth/Auth";  // Asegura que la ruta de importación sea correcta
import '../../styles/common/NavBar.css';


function NavBar() {
  const { isOpen: isOpenLogin, onOpen: onOpenLogin, onOpenChange: onOpenChangeLogin } = useDisclosure();
  
  return (
    <>
      <Navbar className="bg-background/05 backdrop-saturate-110" >
        <NavbarBrand>
          <Link to="/">El Avionazo</Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem>
            <Link to="/crear-vuelos">Vuelos</Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link to="/customers">
              Hoteles
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/buscar-vuelos">
              Consultar Vuelo
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenLogin(); }}>Login</a>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Auth isOpen={isOpenLogin} onOpenChange={onOpenChangeLogin} />
    </>
  );
}

export default NavBar;
