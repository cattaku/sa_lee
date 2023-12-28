import React from "react";
import type { AppProps } from 'next/app'
import { ThemeProvider, type DefaultTheme } from 'styled-components'
import Layout from "@/app.layout/Layout";
import {GlobalStyle} from "@/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout children={<Component {...pageProps} />} />
      </ThemeProvider>
    </>

  )
}

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}
