import './styles/global.css';
import { AppProps } from 'next/app';
import Layout from './components/Layout';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;