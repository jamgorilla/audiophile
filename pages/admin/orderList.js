import { useEffect, useState } from 'react';
import styles from '../../styles/Admin.module.scss';

import { db } from '../../firebase/firebase';
import { getDocs, collection } from 'firebase/firestore';

function OrderList() {
  const [orderList, setOrderList] = useState([]);

  const orderCollectionRef = collection(db, 'orders');

  useEffect(() => {
    const getOrderList = async () => {
      //READ order LIST

      // SET THE order LIST
      try {
        const data = await getDocs(orderCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        setOrderList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getOrderList();
  }, []);

  return (
    <div className={styles.list_holder}>
      <div className={styles.list_container}>
        <div className={styles.titleList}>
          <ul className={styles.titleRow}>
            <li>Customer ID</li>
            <li>Product ID</li>
            <li>Quantity</li>
            <li>Price</li>
            <li>Order ID</li>
          </ul>
        </div>
        <div className={styles.generatedList}>
          {orderList.map((order) => (
            <ul className={styles.generatedRow} key={order.id}>
              <li>{order.customerID}</li>
              <li>{order.productID}</li>
              <li>{order.quantity}</li>
              <li>{order.price}</li>
              <li>{order.id}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderList;
