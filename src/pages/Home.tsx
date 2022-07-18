import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import First from "../components/First";
import Second from "../components/Second";

export default function Home() {
  return (
    <div>
      {" "}
      <div>
        <Button colorScheme="blue">
          <Link to={"/about"}>About</Link>
        </Button>
        <p>hello world from home</p>
        <First />
        <Second />
      </div>
    </div>
  );
}
