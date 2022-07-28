import { Flex, Box, Spacer, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useSearchStore from "../../hooks/useSearchStore";

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
      <Link color={"white"} to="/" style={{ color: "white" }}>
        My Movie Database
      </Link>

      <Box display={"flex"} mr={"10"} justifyContent="space-around">
        {searchBar && (
          <form onSubmit={onSumbit}>
            <Flex mx={"3"}>
              <Input
                bg={"white"}
                name="search"
                variant="outline"
                placeholder="Outline"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                role="input"
              />
              <Button type="submit">Search</Button>
            </Flex>
          </form>
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
