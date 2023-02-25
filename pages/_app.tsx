import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import Header from "../components//Header/Header";
import Head from "next/head";
import ChatContextProvider from "../context/ChatContext";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Final Project</title>
      </Head>
      <Provider store={store}>
        <ChatContextProvider>
          <Header />
          <Component {...pageProps} />
          <ToastContainer />
        </ChatContextProvider>
      </Provider>
    </>
  );
}

export default MyApp;
