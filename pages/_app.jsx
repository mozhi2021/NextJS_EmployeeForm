import React from "react";
import { useRouter as UseRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { CacheProvider } from "@emotion/react";
import Header from "../components/layout/header";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material";
import createEmotionCache from "../styles/createEmotionCache";
import theme from "../styles/theme";

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

        <Header />

        <Component {...pageProps} />
        <br />
        <br />
        <br />
        <br />
      </ThemeProvider>
    </CacheProvider>
  );
}
