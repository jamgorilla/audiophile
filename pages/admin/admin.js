import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Admin.module.scss';
import { db } from '../../firebase/firebase';
import { getDocs, collection } from 'firebase/firestore';
import CustomerList from './customerList';
import ProductList from './productList';
import OrderList from './orderList';

function Admin() {
  // const [customerList, setCustomerList] = useState([]);
  // const [productList, setProductList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('customers');

  // const productCollectionRef = collection(db, 'products');

  return (
    <div className={styles.page_container}>
      <div className={styles.sidebar}>
        <Link href={'/admin/select'}>
          <p className={styles.back_btn}>Back</p>
        </Link>
        <h3>Admin Area</h3>
        <ul>
          <li onClick={() => setSelectedCategory('customers')}>Customers</li>
          <li onClick={() => setSelectedCategory('orders')}>Orders</li>
          <li onClick={() => setSelectedCategory('products')}>Products</li>
        </ul>
      </div>
      <div className="main-content">
        {/* Conditionally render components based on selectedCategory */}
        {selectedCategory === 'customers' && <CustomerList />}
        {selectedCategory === 'products' && <ProductList />}
        {selectedCategory === 'orders' && <OrderList />}
      </div>
    </div>
  );
}

export default Admin;
