import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Admin.module.scss';
import { db } from '../../firebase/firebase';
import { getDocs, collection } from 'firebase/firestore';
import Dashboard from './dashboard';
import CustomerList from './customerList';
import ProductList from './productList';
import OrderList from './orderList';
import dash from '../../public/assets/shared/desktop/analytics-outline.svg';
import box from '../../public/assets/shared/desktop/box-seam.svg';
import person from '../../public/assets/shared/desktop/person.svg';
import cart from '../../public/assets/shared/desktop/cart2.svg';

function Admin() {
  // const [customerList, setCustomerList] = useState([]);
  // const [productList, setProductList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('dashboard');

  // const productCollectionRef = collection(db, 'products');

  return (
    <div className={styles.page_container}>
      <div className={styles.sidebar}>
        <Link href={'/admin/select'}>
          <p className={styles.back_btn}>Back</p>
        </Link>
        <h3>Admin Area</h3>
        <ul className={styles.categoryList}>
          <li onClick={() => setSelectedCategory('dashboard')}>
            <div className={styles.dash_image_container}>
              <Image
                alt="dashboard"
                src={dash}
                className={styles.dash_image}
              ></Image>
            </div>
            <p>Dashboard</p>
          </li>
          <li onClick={() => setSelectedCategory('customers')}>
            <div className={styles.person_image_container}>
              <Image
                alt="person"
                src={person}
                className={styles.person_image}
              ></Image>
            </div>
            <p>Customers</p>
          </li>
          <li onClick={() => setSelectedCategory('orders')}>
            <div className={styles.cart_image_container}>
              <Image
                alt="cart"
                src={cart}
                className={styles.cart_image}
              ></Image>
            </div>
            <p>Orders</p>
          </li>
          <li onClick={() => setSelectedCategory('products')}>
            <div className={styles.box_image_container}>
              <Image alt="box" src={box} className={styles.box_image}></Image>
            </div>
            <p>Products</p>
          </li>
        </ul>
      </div>
      <div className="main-content">
        {/* Conditionally render components based on selectedCategory */}
        {selectedCategory === 'dashboard' && <Dashboard />}

        {selectedCategory === 'customers' && <CustomerList />}
        {selectedCategory === 'products' && <ProductList />}
        {selectedCategory === 'orders' && <OrderList />}
      </div>
    </div>
  );
}

export default Admin;
