import { Flex, IconButton, Box } from "@chakra-ui/react";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

type PaginationProps = {
  current: number;
  total: number;
  setPage: (page: number) => void;
};

export default function Pagination({
  current,
  total,
  setPage,
}: PaginationProps) {
  return (
    <Flex direction={"row"} mb={"12"}>
      {current > 1 && (
        <IconButton
          onClick={() => setPage(current - 1)}
          aria-label="previous-buton"
          icon={<ChevronLeftIcon />}
        />
      )}
      <Box mx={"3.5"}>{current}</Box>
      {current < total && (
        <IconButton
          onClick={() => setPage(current + 1)}
          aria-label="previous-buton"
          icon={<ChevronRightIcon />}
        />
      )}
    </Flex>
  );
}
