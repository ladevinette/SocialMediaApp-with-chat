import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import Header from "../components//Header/Header";
import Head from "next/head";
import ChatContextProvider from "../context/ChatContext";
import { ToastContainer } from "react-toastify";
import { IoProvider } from 'socket.io-react-hook';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Final Project</title>
      </Head>
      <Provider store={store}>
        <IoProvider>
          <ChatContextProvider>
            <Header />
            <Component {...pageProps} />
            <ToastContainer />
          </ChatContextProvider>
        </IoProvider>
      </Provider>
    </>
  );
}

export default MyApp;
