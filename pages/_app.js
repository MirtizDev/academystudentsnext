import { Provider } from 'react-redux';
// import store from '../stores/index';
import '../style/globals.css'
import { Fragment } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    // <Provider store={store}>
    <Fragment>
      <Head>
      <meta charset="utf-8" />
        <link rel="icon" href="/aclogo.ico"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="./aclogo.ico" />
      
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        
        <title>Academy Students | Dizyanın tək ünvanı</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
    /* // </Provider> */
  );
}
