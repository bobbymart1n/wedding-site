import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  primary: '#1E1E1E',
}

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Casey & Bobby 2020</title>
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}