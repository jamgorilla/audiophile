import React from 'react';
import styles from '../styles/Checkout.module.scss';
import Router from 'next/router';
import SummaryItem from '../components/mainNavigation/SummaryItem';
import { useShoppingCart } from '../components/context/ShoppingCartContext';
import data from '../data.json';
import RadioBtn from '../components/elements/RadioBtn';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import orderConfirm from '../public/assets/checkout/icon-order-confirmation.svg';
import Image from 'next/image';

export default function Checkout() {
  const [pay, setPay] = useState(false);

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

  function cartSum() {
    let total = 0;
    for (let i = 0; cartItems.length > i; i++) {
      total = total + cartItems[i].quantity;
    }
    return total;
  }

  function nWC(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  useEffect(() => {
    // console.log('clicked');
    if (pay === true) {
      //add open class to body
      document.body.classList.add('open_pay');
    } else {
      //remove open class from body
      document.body.classList.remove('open_pay');
    }
  }, [pay]);

  return (
    <div className={styles.checkout_body}>
      <div className={styles.back_button} onClick={() => Router.back()}>
        <p>Go Back</p>
      </div>
      <div className={styles.checkout_card}>
        <h2>checkout</h2>
        <p className={`${styles.billing_title} sub-title`}>Billing Details</p>
        <div className={styles.billing_grid}>
          <div className={styles.input_n_label}>
            <label className={styles.text_btn_label} htmlFor="test">
              <p>Name</p>
            </label>
            <input type="text" id="test" placeholder="John Connors" />
          </div>

          <div className={styles.input_n_label}>
            <label className={styles.text_btn_label} htmlFor="test">
              <p>Email Address</p>
            </label>
            <input type="text" id="test" placeholder="johnc@mail.com" />
          </div>

          <div className={styles.input_n_label}>
            <label className={styles.text_btn_label} htmlFor="test">
              <p>Phone Number</p>
            </label>
            <input type="text" id="test" placeholder="+447724084" />
          </div>
          {/* billing_grid  */}
        </div>
        <p className={`${styles.shipping_title} sub-title`}>Shipping Info</p>
        <div className={styles.shipping_grid}>
          <div className={styles.input_n_label}>
            <label className={styles.text_btn_label} htmlFor="test">
              <p>Address</p>
            </label>
            <input type="text" id="test" placeholder="10 Downing St" />
          </div>

          <div className={styles.input_n_label}>
            <label className={styles.text_btn_label} htmlFor="test">
              <p>Post Code / Zip Code</p>
            </label>
            <input type="text" id="test" placeholder="SW1A 2AA" />
          </div>

          <div className={styles.input_n_label}>
            <label className={styles.text_btn_label} htmlFor="test">
              <p>City</p>
            </label>
            <input type="text" id="test" placeholder="London" />
          </div>
          <div className={styles.input_n_label}>
            <label className={styles.text_btn_label} htmlFor="test">
              <p>Country</p>
            </label>
            <input type="text" id="test" placeholder="United Kingdom" />
          </div>

          {/* shipping_grid  */}
        </div>

        <p className={`${styles.payment_title} sub-title`}>Payment Details</p>
        <div className={styles.payment_grid}>
          <div className={styles.input_n_label}>
            <label className={styles.text_btn_label} htmlFor="test">
              <p>Payment Method</p>
            </label>
          </div>

          <div className={styles.radio_btns}>
            <RadioBtn innerHTML="e-Money" />
            <RadioBtn innerHTML="Cash on Delivery" />
          </div>

          <div className={styles.input_n_label}>
            <label className={styles.text_btn_label} htmlFor="test">
              <p>e-Money Number</p>
            </label>
            <input type="text" id="test" placeholder="238521993" />
          </div>
          <div className={styles.input_n_label}>
            <label className={styles.text_btn_label} htmlFor="test">
              <p>e-Money PIN</p>
            </label>
            <input type="text" id="test" placeholder="6891" />
          </div>

          {/* payment_grid  */}
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
          <h5 className={styles.summary_right}>£{nWC(sumPrices())}</h5>
        </div>
        <div className={styles.summary_rows}>
          <h5 className={styles.summary_left}>Shipping</h5>
          <h5 className={styles.summary_right}>£{0}</h5>
        </div>
        <div className={styles.summary_rows}>
          <h5 className={styles.summary_left}>Vat (included )</h5>
          <h5 className={styles.summary_right}>
            £{nWC(Math.ceil(sumPrices() * 0.2))}
          </h5>
        </div>
        <div className={styles.summary_rows}>
          <h5 className={styles.summary_left}>Grand Total</h5>
          <h5 className={styles.summary_grand}>
            £{nWC(Math.ceil(sumPrices() * 1.2))}
          </h5>
        </div>

        <button
          onClick={() => setPay(!pay)}
          className={'btn-type-1 ' + styles.pay_btn}
        >
          <h5>Continue & pay</h5>
        </button>
      </div>

      <div className={styles.pay_dropdown_card}>
        {pay && (
          <div className={styles.pay_container_div}>
            <div className={styles.pay_heading_container}>
              <Image src={orderConfirm} alt="order_confirmed_tick" />
              <h2>Thank you for your order</h2>
              <p>You will receive an email confirmation shortly.</p>
            </div>
            <div className={styles.order_conf_grid}>
              <ul className={styles.cart_item_ul}>
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
              <div className={styles.g_total}>
                <h5>Grand Total</h5>
                <h4> £{nWC(Math.ceil(sumPrices() * 1.2))}</h4>
              </div>
            </div>

            <Link href={'/'} onClick={() => setPay(!pay)}>
              <button className={'btn-type-1 ' + styles.checkout_btn}>
                <h5>Back To Home</h5>
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* checkout_body  */}
    </div>
  );
}
