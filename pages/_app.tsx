
import { ToastContainer } from 'react-toastify'

import '@styles/globals.css'
import {NextUIProvider} from '@nextui-org/react'


const Noop = ({children}:any) => <>{children}</>
export default function App({ Component, pageProps }:any) {
  const Layout = Component.Layout ?? Noop

  return (
    <NextUIProvider>
      <Layout>
      
      <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  )
}
