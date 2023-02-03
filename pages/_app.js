import '../styles/globals.scss';
import Layout from '../components/layout/Layout';
import { ShoppingCartProvider } from '../components/context/ShoppingCartContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ShoppingCartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ShoppingCartProvider>
    </>
  );
}

export default MyApp;
