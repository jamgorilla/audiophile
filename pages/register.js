import React from 'react';
import { useState } from 'react';
import { db } from '../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useRouter } from 'next/router';

export default function Register() {
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
    try {
      await addDoc(customerCollectionRef, {
        Name: newCustomerName,
        Email: newCustomerEmail,
        Passwod: newPassword,
      });

      // If the data submission is successful, redirect to the checkout screen
      router.push('/checkout');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h3>Register</h3>
      <input
        placeholder="Name"
        onChange={(e) => setNewCustomerName(e.target.value)}
      ></input>
      <input
        placeholder="Email"
        onChange={(e) => setNewCustomerEmail(e.target.value)}
      ></input>
      <input
        placeholder="Password"
        onChange={(e) => setNewPassword(e.target.value)}
      ></input>

      <button onClick={onSubmitCustomer}>Submit</button>
      <p>Continue as Guest</p>
    </div>
  );
}
