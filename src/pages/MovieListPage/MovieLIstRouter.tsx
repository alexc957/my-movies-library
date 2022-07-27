import { Link } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

export default function MovieLIstRouter() {
  return (
    <>
      <Outlet />
    </>
  );
}
