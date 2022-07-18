import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import First from "./components/First";
import Second from "./components/Second";
import { Button, ButtonGroup } from "@chakra-ui/react";
export default function App() {
  return (
    <ChakraProvider>
      <div>
        <Button colorScheme="blue">Button</Button>
        <p>hello world</p>
        <First />
        <Second />
      </div>
    </ChakraProvider>
  );
}
