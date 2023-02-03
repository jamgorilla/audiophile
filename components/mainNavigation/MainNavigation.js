// import CustomForwardImage from './CustomForwardImage.js';
import Image from 'next/image';
import cartIcon from '../../public/assets/shared/desktop/icon-cart.svg';
import logo from '../../public/assets/shared/desktop/logo.svg';
import hamburger from '../../public/assets/shared/tablet/icon-hamburger.svg';
import styles from '../../styles/MainNavigation.module.scss';
import Link from 'next/link';
import NavList from './NavList';
import CartItem from './CartItem';
import data from '../../data.json';

import navListData from '../../navListData.json';

import { useState, useEffect } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

function MainNavigation(props) {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(false);

  const {
    getItemQuantity,
    getTotalNumberItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartItems,
    removeAllItems,
  } = useShoppingCart();

  const quantity = getItemQuantity();
  const total = getTotalNumberItems();

  useEffect(() => {
    if (open === true) {
      //add open class to body
      document.body.classList.add('open');
    } else {
      //remove open class from body
      document.body.classList.remove('open');
    }
  }, [open]);

  useEffect(() => {
    // console.log('clicked');
    if (cart === true) {
      //add open class to body
      document.body.classList.add('open_cart');
    } else {
      //remove open class from body
      document.body.classList.remove('open_cart');
    }
  }, [cart]);

  function cartSum() {
    let total = 0;
    for (let i = 0; cartItems.length > i; i++) {
      total = total + cartItems[i].quantity;
    }
    console.log('RECALC', total);
    return total;
  }
  function sumPrices() {
    let total = 0;
    for (let i = 0; cartItems.length > i; i++) {
      total = total + cartItems[i].quantity * data[cartItems[i].id - 1].price;
    }
    return total;
  }

  return (
    <nav className={styles.main_navigation}>
      <div
        className={`${styles.hamburger_container} btn1`}
        onClick={() => setOpen(!open)}
      >
        <Image src={hamburger} alt="hamburger-menu" />

        {open && (
          <div className={styles.fixed_nav_container}>
            <NavList navigationArray={navListData} />
          </div>
        )}
      </div>

      <div className={styles.explicit_nav_list}>
        <li key="0">
          <h6>
            <Link href="/">Home</Link>
          </h6>
        </li>

        {navListData.map((element) => (
          <li key={element.id}>
            <h6>
              <Link href={element.pageLink}>{element.title}</Link>
            </h6>
          </li>
        ))}
      </div>

      <div className={styles.logo_container}>
        <Image
          src={logo}
          //layout='responsive'
          height={'58px'}
          width={'58px'}
          alt="logo"
          className="logo"
        />
      </div>
      <div className={styles.cart_container} onClick={() => setCart(!cart)}>
        <Image
          src={cartIcon}
          //layout='responsive'
          height={'58px'}
          width={'58px'}
          alt="cart"
          className="cart"
        />
      </div>
      <div className={styles.cart_dropdown_card}>
        {cart && (
          <div>
            <div className={styles.cart_heading_container}>
              <h4> Cart ({cartSum()})</h4>
              <p
                className={'sub-title ' + styles.remove_btn}
                onClick={() => removeAllItems()}
              >
                Remove all
              </p>
            </div>
            <ul className={styles.cart_item_ul}>
              {cartItems.map((item) => {
                return (
                  <CartItem
                    id={item.id}
                    quantity={item.quantity}
                    key={item.id}
                  />
                );
              })}
            </ul>
            <div className={styles.cart_total_price}>
              <h4>Total</h4>
              <h4>${sumPrices()}</h4>
            </div>
            <button className={'btn-type-1 ' + styles.checkout_btn}>
              <h5>Checkout</h5>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default MainNavigation;
