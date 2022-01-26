import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../utils/theme";
import Header from "../components/originals/header";
import Footer from "../components/originals/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
