import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ParticleProvider } from '../components/context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My professional portfolio website" />
      </Head>
      <ParticleProvider>
        <Component {...pageProps} />
      </ParticleProvider>
    </>
  );
}