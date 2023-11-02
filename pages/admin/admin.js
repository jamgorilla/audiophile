import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Admin.module.scss';
import { db } from '../../firebase/firebase';
import { getDocs, collection } from 'firebase/firestore';

function Admin() {
  const [customerList, setCustomerList] = useState([]);

  const customerCollectionRef = collection(db, 'customers');

  useEffect(() => {
    const getCustomerList = async () => {
      //READ CUSTOMER LIST

      // SET THE CUSTOMER LIST
      try {
        const data = await getDocs(customerCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        setCustomerList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getCustomerList();
  }, []);

  return (
    <div className={styles.page_container}>
      <div className={styles.sidebar}>
        <Link href={'/admin/select'}>
          <p className={styles.back_btn}>Back</p>
        </Link>
        <h3>Admin Area</h3>
        <ul>
          <li>Customers</li>
          <li>Orders</li>
          <li>Products</li>
        </ul>
      </div>
      <div className={styles.list_holder}>
        <div className={styles.list_container}>
          <div className={styles.titleList}>
            <ul className={styles.titleRow}>
              <li>Name</li>
              <li>Email</li>
              <li>Phone</li>
              <li>Customer ID</li>
            </ul>
          </div>
          <div className={styles.generatedList}>
            {customerList.map((customer) => (
              <ul className={styles.generatedRow} key={customer.id}>
                <li>{customer.Name}</li>
                <li>{customer.Email}</li>
                <li>{customer.Phone}</li>
                <li>{customer.id}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
