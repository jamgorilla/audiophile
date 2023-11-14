import { useEffect, useState } from 'react';
import styles from '../../styles/Admin.module.scss';

import { db } from '../../firebase/firebase';
import { getDocs, collection } from 'firebase/firestore';

import LineChart from './LineChart';
import { UserData } from './data';

function CustomerList() {
  const [customerList, setCustomerList] = useState([]);

  // testing chart.js with example data
  const [userData, sertUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Total Customers',
        data: UserData.map((data) => data.customers),
        borderColor: '#649CCF',
        tension: 0.4,
      },
    ],
  });

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
        // console.log(filteredData);
        setCustomerList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getCustomerList();
  }, []);

  return (
    <div className={styles.list_holder}>
      <div className={styles.monthly_customers_chart_container}>
        <LineChart chartData={userData} />
      </div>
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
  );
}

export default CustomerList;
