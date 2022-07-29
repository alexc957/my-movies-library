import { Flex, IconButton, Box } from "@chakra-ui/react";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import withConsoleLogs from "../../../components/HOC/withLogger";

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
          aria-label="previous-button"
          role={"previous-button"}
          icon={<ChevronLeftIcon />}
        />
      )}
      <Box mx={"3.5"} role={"page-number"}>
        {current}
      </Box>
      {current < total && (
        <IconButton
          aria-label="next-button"
          onClick={() => setPage(current + 1)}
          role="next-button"
          icon={<ChevronRightIcon />}
        />
      )}
    </Flex>
  );
}
