import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/darkmode.css'
import {ThemeProvider} from "styled-components"
import Layout from "../Components/layout";


function MyApp({ Component, pageProps }) {

  return(
      <Layout><Component {...pageProps} /></Layout>

  )
}

export default MyApp
