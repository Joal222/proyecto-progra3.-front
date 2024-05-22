
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, useDisclosure, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button,Avatar} from "@nextui-org/react";
import './navBarSystem.css';



function NavBarSystem() {
  const { isOpen: isOpenLogin, onOpen: onOpenLogin, onOpenChange: onOpenChangeLogin } = useDisclosure();
  
  return (
    <>
      <Navbar className="navbar flex z-40 w-full items-center justify-center sticky top-0 inset-x-0 bg-transparent text-cyan-400 h-full">
        <NavbarBrand>
          <Link to="/"><h1 className="text-3xl">El Avionazo</h1></Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10" justify="center">
          <NavbarItem>
            <Dropdown backdrop="blur" className="text-cyan-400 bg-transparent">
              <DropdownTrigger className="dropdown-menu">
                <Button  
                  variant="bordered" className="text-cyan-400 "
                >
                  Aerolinea
                </Button>
              </DropdownTrigger >
              <DropdownMenu variant="faded" aria-label="Static Actions" className="text-cyan-400 bg-transparent dropdown-menu">
                <DropdownItem textValue="Agregar Vuelo"> <Link  to="/crear-vuelo"> Agregar Vuelo </Link> </DropdownItem>
                <DropdownItem textValue="Agregar Aerolinea"> <Link to="/crear-tripulacion">Crear Tripulación</Link> </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem isActive>
            <Dropdown backdrop="blur" className="text-cyan-400 bg-transparent">
              <DropdownTrigger>
                <Button 
                  variant="bordered" className="text-cyan-400"
                >
                  Consulta
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions" className="text-cyan-400 dropdown-menu">
                <DropdownItem className="dropdown-item" textValue="Consultar Aviones"  color="text-cyan-400"> <Link to="/consultar-aviones"> Consultar Aviones   </Link> </DropdownItem>
                <DropdownItem className="dropdown-item" textValue="Consultar Aerolinea"color="text-cyan-400"> <Link to="/consultar-aerolineas"> Consultar Aerolinea </Link> </DropdownItem>
                <DropdownItem className="dropdown-item" textValue="Consultar Vuelos"   color="text-cyan-400"> <Link to="/consultar-vuelos"> Consultar Vuelos    </Link> </DropdownItem>
                <DropdownItem className="dropdown-item" textValue="Consultar Destinos" color="text-cyan-400"> <Link to="/consultar-destinos"> Consultar Destino   </Link> </DropdownItem>
                <DropdownItem className="dropdown-item" textValue="Equipo Por Vuelo"   color="text-cyan-400"> <Link to="/consultar-equipaje"> Equipaje Por Vuelo    </Link> </DropdownItem>
                <DropdownItem className="dropdown-item" textValue="Pasajeros Por Vuelo"color="text-cyan-400"> <Link to="/consultar-pasajero"> Pasajeros Por Vuelo </Link> </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
          <Dropdown backdrop="blur" className="text-cyan-400 bg-transparent">
              <DropdownTrigger>
                <Button 
                  variant="bordered" className="text-cyan-400"
                >
                  Vuelos
                </Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions" className="text-cyan-400 dropdown-menu">
                <DropdownItem className="dropdown-item" textValue="Consultar Aviones"  color="text-cyan-400"> <Link to="/vuelo-abordaje"> Abordaje   </Link> </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <div className="flex gap-4 items-center">
            <Avatar showFallback src='https://images.unsplash.com/broken' />
          </div>
        </NavbarContent>
      </Navbar>
    </>
  );
}

export default NavBarSystem;
