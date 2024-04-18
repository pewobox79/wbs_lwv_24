import MainLayout from '@/layouts/MainLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// <Component /> - Komponente ist verantwortlich für das Rendern der gesamten Application => wichtigstes Element!!!!!

export default function App({ Component, pageProps }: AppProps) {
  return <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
}
