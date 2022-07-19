import { Flex, Box, Spacer, Link } from "@chakra-ui/react";
import React from "react";

export default function NavBar() {
  return (
    <Flex
      bg={"primary"}
      alignItems={"center"}
      height="100%"
      role={"navigation"}
      justifyContent="space-between"
    >
      <Link color={"white"} href="/">
        My Movie
      </Link>

      <Link mx={"4"} color={"white"} href="/about">
        About
      </Link>
    </Flex>
  );
}
