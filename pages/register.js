import React from 'react';
import { useState } from 'react';
import { db } from '../firebase/firebase';
import { getDocs, collection } from 'firebase/firestore';

export default function Register() {
  // New Movie States
  const [newCustomerName, setNewCustomerName] = useState('');
  const [newCustomerEmail, setNewCustomerEmail] = useState('');
  const [newCustomerPhone, setNewCustomerPhone] = useState('');
  const [newCustomerID, setNewCustomerID] = useState(0);

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
        placeholder="Phone"
        onChange={(e) => setNewCustomerPhone(e.target.value)}
      ></input>
      <input
        placeholder="CustomerID"
        type="number"
        onChange={(e) => setNewCustomerID(Number(e.target.value))}
      ></input>

      <button>Submit</button>
      <p>Continue as Guest</p>
    </div>
  );
}
