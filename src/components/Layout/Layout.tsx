import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar";

type ChildrenProp = {
  children: React.ReactNode;
};
export default function Layout({ children }: ChildrenProp) {
  return (
    <Grid
      templateAreas={`"header header"
                  " main main"
                  "footer footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="200px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="primary" area={"header"}>
        <NavBar />
      </GridItem>

      <GridItem pl="2" area={"main"}>
        {children}
      </GridItem>
      <GridItem pl="2" bg="primary" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}
