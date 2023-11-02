// import '../styles/globals.scss';
// import Layout from '../components/layout/Layout';
// import { ShoppingCartProvider } from '../components/context/ShoppingCartContext';

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <ShoppingCartProvider>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </ShoppingCartProvider>
//     </>
//   );
// }

// export default MyApp;

import '../styles/globals.scss';
import Layout from '../components/layout/Layout';
import { ShoppingCartProvider } from '../components/context/ShoppingCartContext';
import AdminLayout from '../components/layout/AdminLayout'; // Import your AdminLayout

function MyApp({ Component, pageProps, router }) {
  // Check the route to determine the layout
  const isAdminPage = router.pathname.startsWith('/admin');

  return (
    <>
      <ShoppingCartProvider>
        {isAdminPage ? ( // Use AdminLayout for admin pages, default layout for others
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ShoppingCartProvider>
    </>
  );
}

export default MyApp;
