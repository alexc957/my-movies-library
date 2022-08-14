import { Flex, Box, Spacer, Input, Button, Divider } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useSearchStore from "../../hooks/useSearchStore";
import SearchForm from "./SearchForm";

type NavBarType = {
  searchBar?: boolean;
};

export default function NavBar({ searchBar }: NavBarType) {
  //const [search, setSearch] = useState<string>("");
  const search = useSearchStore((state) => state.searchValue);
  const setSearch = useSearchStore((state) => state.setSearchValue);
  const navigate = useNavigate();
  const onSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/list/search");
  };
  return (
    <Flex
      alignItems={"center"}
      height="100%"
      role={"navigation"}
      justifyContent="space-between"
    >
      <Box width={"72"} display="flex"  mt={"4"}>
        <Link color={"white"} to="/" style={{ color: "white" }}>
          My Movie Database
        </Link>
        <Spacer />

        <Link color={"white"} to="/recommend" style={{ color: "white" }}>
          Recommender
        </Link>
      </Box>

      <Box display={"flex"} mr={"10"} justifyContent="space-around">
        {searchBar && (
         <SearchForm />
        )}
        <Link
          color={"white"}
          data-cy="about"
          to="/about"
          style={{ color: "white" }}
        >
          About
        </Link>
      </Box>
    </Flex>
  );
}
