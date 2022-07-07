import React, { useState, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../styles/createEmotionCache";
import theme from "../styles/theme";
import "/styles/globals.css";
import Header from "../components/header";
import Router, { useRouter as UseRouter } from "next/router";
import Contact from "../pages/contact";
import EmployeeForm from "./Employees/EmployeeForm";
import Employees from "./Employees/employees";


const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const router = UseRouter();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="bgimage">
          <Header />



          <Component {...pageProps} />

          <br />
          <br />
          <br />
          <br />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}
