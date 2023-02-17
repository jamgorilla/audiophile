import React from 'react';
import styles from '../styles/Checkout.module.scss';
import Router from 'next/router';
import SummaryItem from '../components/mainNavigation/SummaryItem';
import { useShoppingCart } from '../components/context/ShoppingCartContext';
import data from '../data.json';

export default function Checkout() {
  const {
    getItemQuantity,
    getTotalNumberItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
    removeAllItems,
  } = useShoppingCart();

  function sumPrices() {
    let total = 0;
    for (let i = 0; cartItems.length > i; i++) {
      total = total + cartItems[i].quantity * data[cartItems[i].id - 1].price;
    }
    return total;
  }

  return (
    <div className={styles.checkout_body}>
      <div className={styles.back_button} onClick={() => Router.back()}>
        <p>Go Back</p>
      </div>
      <div className={styles.checkout_card}>
        <h2>checkout</h2>
        <p className="sub-title">Billing Details</p>
        <div className={styles.billing_grid}>
          <div className={styles.input_n_label}>
            <label className="text-btn-label" htmlFor="test">
              <p>Name</p>
            </label>
            <input type="text" id="test" placeholder="John Connors" />
          </div>

          <div className={styles.input_n_label}>
            <label className="text-btn-label" htmlFor="test">
              <p>Email Address</p>
            </label>
            <input type="text" id="test" placeholder="johnc@mail.com" />
          </div>

          <div className={styles.input_n_label}>
            <label className="text-btn-label" htmlFor="test">
              <p>Phone Number</p>
            </label>
            <input type="text" id="test" placeholder="+447724084" />
          </div>
          {/* billing_grid  */}
        </div>
        <p className="sub-title">Shipping Info</p>
        <div className={styles.shipping_grid}>
          <div className={styles.input_n_label}>
            <label className="text-btn-label" htmlFor="test">
              <p>Address</p>
            </label>
            <input type="text" id="test" placeholder="10 Downing St" />
          </div>

          <div className={styles.input_n_label}>
            <label className="text-btn-label" htmlFor="test">
              <p>Post Code / Zip Code</p>
            </label>
            <input type="text" id="test" placeholder="SW1A 2AA" />
          </div>

          <div className={styles.input_n_label}>
            <label className="text-btn-label" htmlFor="test">
              <p>City</p>
            </label>
            <input type="text" id="test" placeholder="London" />
          </div>
          <div className={styles.input_n_label}>
            <label className="text-btn-label" htmlFor="test">
              <p>Country</p>
            </label>
            <input type="text" id="test" placeholder="United Kingdom" />
          </div>

          {/* shipping_grid  */}
        </div>

        {/* checkout_card  */}
      </div>

      <div className={styles.summary_card}>
        <h4>Summary</h4>
        <ul className={styles.summary_item_ul}>
          {cartItems.map((item) => {
            return (
              <SummaryItem
                id={item.id}
                quantity={item.quantity}
                key={item.id}
              />
            );
          })}
        </ul>
        <div className={styles.summary_rows}>
          <h5 className={styles.summary_left}>Total</h5>
          <h5 className={styles.summary_right}>£{sumPrices()}</h5>
        </div>
        <div className={styles.summary_rows}>
          <h5 className={styles.summary_left}>Shipping</h5>
          <h5 className={styles.summary_right}>£{0}</h5>
        </div>
        <div className={styles.summary_rows}>
          <h5 className={styles.summary_left}>Vat (included )</h5>
          <h5 className={styles.summary_right}>£{sumPrices() * 0.2}</h5>
        </div>
        <div className={styles.summary_rows}>
          <h5 className={styles.summary_left}>Grand Total</h5>
          <h5 className={styles.summary_grand}>£{sumPrices() * 1.2}</h5>
        </div>

        <button className={'btn-type-1 ' + styles.pay_btn}>
          <h5>Continue & pay</h5>
        </button>
      </div>

      {/* checkout_body  */}
    </div>
  );
}
