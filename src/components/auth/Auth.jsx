import React from "react";
import {
  Tabs,
  Tab,
  Input,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Link,
  ModalFooter,
} from "@nextui-org/react";

function Auth({ isOpen, onOpenChange }) {
  const [selected, setSelected] = React.useState("login");

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" className="bg-background/65 backdrop-saturate-110">
      <ModalContent>
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
            <form className="flex flex-col gap-4">
              <Input
                isRequired
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
              <Input
                isRequired
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
               <p className="text-center text-sm">
                  Need to create an account?{" "}
                  <Link color="primary" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
              <Button fullWidth color="primary">
                Login
              </Button>
            </form>
          ) : (
            <form className="flex flex-col gap-4">
              <Input
                isRequired
                label="Número de pasaporte"
                placeholder="Ingrese su número de pasaporte"
                maxLength={15}
              />
              <Input
                isRequired
                label="Nombre Completo"
                placeholder="Ingrese su nombre completo"
              />
              <Input isRequired label="Fecha de nacimiento" type="date" />
              <Input
                isRequired
                label="Nacionalidad"
                placeholder="Ingrese su nacionalidad"
              />
              <Input
                isRequired
                label="Correo electrónico"
                type="email"
                placeholder="Ingrese su correo electrónico"
              />
              <Input
                isRequired
                label="Código de área telefónico del país"
                placeholder="Código de área"
              />
              <Input
                isRequired
                label="Número de teléfono"
                placeholder="Número de teléfono"
                maxLength={8}
                pattern="\d{8}"
              />
              <Input
                isRequired
                label="Número para emergencias"
                placeholder="Número de emergencias"
              />
              <Input
                isRequired
                label="Dirección"
                placeholder="Ingrese su dirección"
              />
              <p className="text-center text-sm">
                  Already have an account?{" "}
                  <Link color="primary" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
              <Button fullWidth color="success">
                Sign up
              </Button>
            </form>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="error" onPress={() => onOpenChange(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default Auth;
