import Link from 'next/link';
import styles from '../../styles/Select.module.scss';
import AdminLayout from '../../components/layout/AdminLayout';
import { useState } from 'react';
import { db } from '../../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useRouter } from 'next/router';

function Select() {
  const [login, setLogin] = useState(true);

  // New Customer States
  const [newCustomerName, setNewCustomerName] = useState('');
  const [newCustomerEmail, setNewCustomerEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  //reference to customer collection
  const customerCollectionRef = collection(db, 'customers');

  // Initialise router
  const router = useRouter();

  // add new customer collection to database
  const onSubmitCustomer = async () => {
    if (login) {
      // LOGIN

      //read customer login from database
      console.log('You attempted to log in');
    } else {
      // REGISTER
      try {
        await addDoc(customerCollectionRef, {
          Name: newCustomerName,
          Email: newCustomerEmail,
          Passwod: newPassword,
        });

        // If the data submission is successful, redirect to the checkout screen
        router.push('/admin/customer');
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <AdminLayout>
      <div className={styles.select_container}>
        <Link href={'/'}>
          <p className={styles.back_site_btn}>Back</p>
        </Link>
        <div className={styles.admin_container}>
          <h3>Admin section</h3>
          <p>Username</p>
          <input type="text"></input>
          <p>Password</p>
          <input type="text"></input>
          <button>
            <p>Submit</p>
          </button>
          <Link className={styles.admin_guest_link} href={'/admin/admin'}>
            <span>Log in as Guest</span>
          </Link>
        </div>

        <div className={styles.customer_container}>
          <h3>Customer {login ? 'Login' : 'Register'}</h3>

          <p>Username</p>
          <input
            type="text"
            onChange={(e) => setNewCustomerName(e.target.value)}
          ></input>

          {login ? (
            ''
          ) : (
            <div className={styles.popout_email}>
              <p>Email</p>
              <input
                type="text"
                onChange={(e) => setNewCustomerEmail(e.target.value)}
              ></input>
            </div>
          )}

          <p>Password</p>
          <input
            type="text"
            onChange={(e) => setNewPassword(e.target.value)}
          ></input>
          <button onClick={onSubmitCustomer}>
            <p>Submit</p>
          </button>
          <span onClick={() => setLogin(!login)}>
            {login ? 'Register New Customer' : 'Login'}
          </span>

          <Link href={'/admin/customer'}>
            <span>Log in as Guest</span>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Select;
