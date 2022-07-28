import { Flex, Box, Spacer, Link, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import useSearchStore from "../../hooks/useSearchStore";

type NavBarType = {
  searchBar?: boolean;
};

export default function NavBar({ searchBar }: NavBarType) {
  //const [search, setSearch] = useState<string>("");
  const search = useSearchStore((state) => state.searchValue);
  const setSearch = useSearchStore((state) => state.setSearchValue);
  return (
    <Flex
      alignItems={"center"}
      height="100%"
      role={"navigation"}
      justifyContent="space-between"
    >
      <Link color={"white"} href="/">
        My Movie Database
      </Link>

      <Box display={"flex"}>
        {searchBar && (
          <form onSubmit={(e) => e.preventDefault()}>
            <Flex>
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
        <Link mx={"4"} color={"white"} data-cy="about" href="/about">
          About
        </Link>
      </Box>
    </Flex>
  );
}
