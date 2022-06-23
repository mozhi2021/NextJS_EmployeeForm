import React from "react";
import AppBar from "@mui/material/AppBar";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Toolbar from "@mui/material";
import { styled } from "@mui/system";
// import Navbar from "../components/layout/header/navbar";
import Navbar from "./navbar";
import { useRouter as UseRouter } from "next/router";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
const validSubPath = "/forms/auth/?eai=";

const Header = () => {
  const router = UseRouter();

  const navLinks = [
    { title: "Home", path: `/`, label: "home" },
    { title: "About US", path: `about us/`, label: "about us" },
    { title: "Our Services", path: `our Services/`, label: "our Services" },
    { title: "Contact US", path: `/contact us`, label: "contact US" },
  ];

  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="regular">
          <Container
            maxWidth="lg"
            sx={{ display: `flex`, justifyContent: `space-between` }}
          >
            <Navbar navLinks={navLinks} />
            {/* <SideDrawer navLinks={navLinks} /> */}
          </Container>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default Header;
