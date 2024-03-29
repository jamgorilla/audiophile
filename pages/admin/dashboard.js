import { useEffect, useState } from 'react';
import styles from '../../styles/Dashboard.module.scss';

import { db } from '../../firebase/firebase';
import { getDocs, collection } from 'firebase/firestore';

function Dashboard() {
  const [customerList, setCustomerList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [salesTotal, setSalesTotal] = useState(0);

  const customerCollectionRef = collection(db, 'customers');
  const orderCollectionRef = collection(db, 'orders');

  useEffect(() => {
    const getCustomerList = async () => {
      //READ CUSTOMER LIST
      try {
        const data = await getDocs(customerCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // console.log('FILTERED', filteredData);
        setCustomerList(filteredData);
        // setCustomerTotal(filteredData.length);
      } catch (err) {
        console.error(err);
      }
    };

    getCustomerList();
  }, []);

  useEffect(() => {
    const getOrderList = async () => {
      //READ ORDER LIST
      try {
        const data = await getDocs(orderCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log('FILTERED', filteredData);
        setOrderList(filteredData);

        // currency formatter
        const formatCurrency = (value) => {
          const currencyFormatter = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 2,
          });
          return currencyFormatter.format(value / 100); // Assuming totalSales is in pence, so divide by 100
        };

        let orderQuantity = 0;
        let totalSales = 0;
        filteredData.forEach((order) => {
          orderQuantity += order.quantity;
          totalSales += order.quantity * order.price;
        });
        setOrderQuantity(orderQuantity);
        setSalesTotal(formatCurrency(totalSales));

        // console.log('ORDER', orderQuantity, totalSales);
      } catch (err) {
        console.error(err);
      }
    };

    getOrderList();
  }, []);

  return (
    <div className={styles.main_page}>
      <h3>Dashboard</h3>
      <div className={styles.boards_container}>
        <div className={styles.custom_total_board}>
          <p>Total Customers</p>
          <h3>{customerList.length}</h3>
        </div>
        <div className={styles.custom_total_board}>
          <p>Total Orders</p>
          <h3>{orderQuantity}</h3>
        </div>
        <div className={styles.custom_total_board}>
          <p>Total Sales</p>
          <h3>{salesTotal}</h3>
        </div>
        <div className={styles.custom_total_board}>
          <p>Monthly users</p>
          <h3>{}</h3>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
