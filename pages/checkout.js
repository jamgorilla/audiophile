import React from 'react';
import styles from '../styles/Checkout.module.scss';

export default function checkout() {
  return (
    <div className={styles.checkout_body}>
      <button>Go Back</button>
      <div className={styles.checkout_card}>
        <h2>checkout</h2>
        <p className="sub-title">Billing Details</p>
        <div className={styles.billing_grid}>
          <div className={styles.input_n_label}>
            <label className="text-btn-label" for="test">
              <p>Name</p>
            </label>
            <input type="text" id="test" placeholder="John Connors" />
          </div>

          <div className={styles.input_n_label}>
            <label className="text-btn-label" for="test">
              <p>Email Address</p>
            </label>
            <input type="text" id="test" placeholder="johnc@mail.com" />
          </div>

          <div className={styles.input_n_label}>
            <label className="text-btn-label" for="test">
              <p>Phone Number</p>
            </label>
            <input type="text" id="test" placeholder="+447724084" />
          </div>
        </div>
      </div>
    </div>
  );
}
