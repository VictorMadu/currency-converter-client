import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import PageWrapper from "../components/page-wrapper";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "../redux/store";
import PriceAlertModalContainer from "../components/price-alert-modal";

function MyApp({ Component, pageProps }: AppProps) {

  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PageWrapper>
          <Head>
            <title>Erate</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
          <PriceAlertModalContainer />
        </PageWrapper>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
