import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Tabs, Tab, Input, Button, ModalFooter, Link } from '@nextui-org/react';
import { useAuth } from '../../hooks/UseAuth';
import 'react-toastify/dist/ReactToastify.css';

function Auth({ isOpen, onOpenChange }) {
  const {
    selected, setSelected,
    loginData, signUpData,
    error,
    handleInputChange,
    handleSignUp,
    handleLogin
  } = useAuth(onOpenChange);

  const modalWidth = selected === "sign-up" ? "max-w-4xl" : "max-w-lg";

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" className="bg-background/65 backdrop-saturate-110">
        <ModalContent className={modalWidth}>
          <ModalHeader>
            <Tabs fullWidth size="md" aria-label="Tabs form" selectedKey={selected} onSelectionChange={setSelected}>
              <Tab key="login" title="Login" />
              <Tab key="sign-up" title="Sign up" />
            </Tabs>
          </ModalHeader>
          <ModalBody>
            {selected === "login" ? (
              <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                <Input clearable bordered fullWidth color="primary" size="lg" label="Email" placeholder="Enter your email" value={loginData.email} onChange={(e) => handleInputChange(e, 'login')} name="email" />
                <Input clearable bordered fullWidth color="primary" size="lg" label="Password" placeholder="Enter your password" type="password" value={loginData.password} onChange={(e) => handleInputChange(e, 'login')} name="password" />
                <Button className="bg-green-600 hover:bg-green-400 w-full" type="submit">Login</Button>
              </form>
            ) : (
              <form className="flex flex-wrap gap-4" onSubmit={handleSignUp}>
                <div className="flex-1 min-w-[calc(50%-1rem)]">
                  <Input className="m-2" isRequired label="Nombre" placeholder="Ingrese sus nombres" value={signUpData.firstName} onChange={(e) => handleInputChange(e, 'sign-up')} name="firstName" />
                  <Input className="m-2" isRequired label="Contraseña" type="password" placeholder="Ingrese su contraseña" value={signUpData.password} onChange={(e) => handleInputChange(e, 'sign-up')} name="password" />
                </div>
                <div className="flex-1 min-w-[calc(50%-1rem)]">
                  <Input className="m-2" isRequired label="Apellido" placeholder="Ingrese sus apellidos" value={signUpData.lastName} onChange={(e) => handleInputChange(e, 'sign-up')} name="lastName" />
                  <Input className="m-2" isRequired label="Correo electrónico" type="email" placeholder="Ingrese su correo electrónico" value={signUpData.email} onChange={(e) => handleInputChange(e, 'sign-up')} name="email" />
                  <Input className="m-2" isRequired label="Confirme su Contraseña" type="password" placeholder="Confirme su contraseña" value={signUpData.confirmPassword} onChange={(e) => handleInputChange(e, 'sign-up')}name="confirmPassword" />
                </div>
                <div className="flex-1 min-w-[calc(50%-1rem)]">
                  <p className="text-center text-sm">
                    Already have an account?{" "}
                    <Link color="primary" onPress={() => setSelected("login")}>
                      Login
                    </Link>
                  </p>
                  <Button className="bg-green-600 hover:bg-green-400 w-full" type="submit">Sign up</Button>
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
    </>
  );
}

export default Auth;
