import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Tabs, Tab, Input, Button, ModalFooter, Link } from '@nextui-org/react';
import { useAuth } from '../../hooks/UseAuth'; 
import  CountrySelect  from './CountrySelect';

function Auth({ isOpen, onOpenChange }) {
  const {
    selected, setSelected,
    loginData, signUpData,
    error,
    handleInputChange,
    handleSignUp,
    handleLogin
  } = useAuth(onOpenChange);

  const [selectedCountryCode, setSelectedCountryCode] = useState(''); // Nuevo estado para almacenar el código de área del país seleccionado

  const modalWidth = selected === "sign-up" ? "max-w-4xl" : "max-w-lg";

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" className="bg-background/65 backdrop-saturate-110">
      <ModalContent className={modalWidth}>
        <ModalHeader>
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Login" />
            <Tab key="sign-up" title="Sign up" />
          </Tabs>
        </ModalHeader>
        <ModalBody>
          {selected === "login" ? (
            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                label="Email"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={(e) => handleInputChange(e, 'login')}
                name="email"
              />
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                label="Password"
                placeholder="Enter your password"
                type="password"
                value={loginData.password}
                onChange={(e) => handleInputChange(e, 'login')}
                name="password"
              />
              <Button className="bg-green-600 hover:bg-green-400 w-full" type="submit">
                Login
              </Button>
            </form>
          ) : (
            <form className="flex flex-wrap gap-4" onSubmit={handleSignUp}>
            <div className="flex-1 min-w-[calc(50%-1rem)]">
            <Input className="m-2"
                isRequired
                label="Nombre"
                placeholder="Ingrese sus nombres "
                value={signUpData.nombres} // Asegúrate de añadir esto
                onChange={(e) => handleInputChange(e, 'sign-up')}
                name="nombres"
              />
              <Input className="m-2"
                isRequired
                label="Número de pasaporte"
                placeholder="Ingrese su número de pasaporte"
                maxLength={15}
                value={signUpData.pasaporte} // Asegúrate de añadir esto
                onChange={(e) => handleInputChange(e, 'sign-up')}
                name="pasaporte"
              />
              
              <CountrySelect onSelect={(country) => setSelectedCountryCode(country.idd.root)} /> 
              
              <Input className="m-2"
                isRequired
                label="Número de teléfono"
                placeholder="Número de teléfono"
                maxLength={8}
                pattern="\d{8}"
                value={signUpData.tel} // Asegúrate de añadir esto
                onChange={(e) => handleInputChange(e, 'sign-up')}
                name="tel"
              />
              <Input className="m-2"
                isRequired
                label="Dirección"
                placeholder="Ingrese su dirección"
                value={signUpData.direccion} // Asegúrate de añadir esto
                onChange={(e) => handleInputChange(e, 'sign-up')}
                name="direccion"
              />   
              <Input className="m-2"
                isRequired
                label="Contraseña"
                type="password"
                placeholder="Ingrese su contraseña"
                value={signUpData.password} // Asegúrate de añadir esto
                onChange={(e) => handleInputChange(e, 'sign-up')}
                name="password"
              />
               </div>
              <div className="flex-1 min-w-[calc(50%-1rem)]">
              <Input className="m-2"
                isRequired
                label="Apelldio"
                placeholder="Ingrese sus apellidos "
                value={signUpData.apellidos} // Asegúrate de añadir esto
                onChange={(e) => handleInputChange(e, 'sign-up')}
                name="apellidos"
              />
               <Input className="m-2" 
              isRequired 
              label="Fecha de nacimiento" 
              type="date"
              value={signUpData.fechaNacimiento} // Asegúrate de añadir esto
              onChange={(e) => handleInputChange(e, 'sign-up')}
              name="fechaNacimiento"
               />
             <Input className="m-2"
                isRequired
                label="Código de área telefónico del país"
                placeholder="Código de área"
                value={selectedCountryCode}
                onChange={(e) => setSelectedCountryCode(e.target.value)}
                name="codigoAreaPais"
              />
              <Input className="m-2"
                isRequired
                label="Número para emergencias"
                placeholder="Número de emergencias"
                value={signUpData.telEmergencias} // Asegúrate de añadir esto
                onChange={(e) => handleInputChange(e, 'sign-up')}
                name="telEmergencias"
              />
              <Input className="m-2"
                isRequired
                label="Correo electrónico"
                type="email"
                placeholder="Ingrese su correo electrónico"
                value={signUpData.email} // Asegúrate de añadir esto
                onChange={(e) => handleInputChange(e, 'sign-up')}
                name="email"
              />                        
              <Input className="m-2"
                isRequired
                label="Confirme su Contraseña"
                type="password"
                placeholder="Confirme su contraseña"
                name="Confirmepassword"
              />
            </div>
            <div className="flex-1 min-w-[calc(50%-1rem)]">
                <p className="text-center text-sm">
                    Already have an account?{" "}
                    <Link color="primary" onPress={() => setSelected("login")}>
                      Login
                    </Link>
                  </p>
                <Button className= "bg-green-600 hover:bg-green-400 w-full "  type="submit">
                  Sign up
                </Button>
              </div>
          </form>
          )}
        </ModalBody>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ModalFooter>
          <div className="flex items-center justify-center w-full">
            <Button className="bg-red-700 hover:bg-red-600 text-white w-1/3" onPress={() => onOpenChange(false)}>
              Cancelar
            </Button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Auth;

