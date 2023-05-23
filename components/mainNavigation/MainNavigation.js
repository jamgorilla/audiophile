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

// Main navigation component
function MainNavigation(props) {
  const [open, setOpen] = useState(false); // State for hamburger menu
  const [cart, setCart] = useState(false); // State for cart

  const { getItemQuantity, getTotalNumberItems, cartItems, removeAllItems } =
    useShoppingCart(); // Access shopping cart context functions

  const quantity = getItemQuantity(); // Get current item quantity
  const total = getTotalNumberItems(); // Get total number of items in the cart

  // Toggle open class on body element when hamburger menu state changes
  useEffect(() => {
    if (open === true) {
      //add open class to body
      document.body.classList.add('open');
    } else {
      //remove open class from body
      document.body.classList.remove('open');
    }
  }, [open]);

  // Toggle open class on body element when cart state changes
  useEffect(() => {
    if (cart === true) {
      //add open class to body
      document.body.classList.add('open_cart');
    } else {
      //remove open class from body
      document.body.classList.remove('open_cart');
    }
  }, [cart]);

  // Calculate total quantity of items in the cart
  function cartSum() {
    let total = 0;
    for (let i = 0; cartItems.length > i; i++) {
      total = total + cartItems[i].quantity;
    }
    return total;
  }
  // Calculate total prices of items in the cart
  function sumPrices() {
    let total = 0;
    for (let i = 0; cartItems.length > i; i++) {
      total = total + cartItems[i].quantity * data[cartItems[i].id - 1].price;
    }
    return total;
  }

  // Function to format numbers with thousand separators
  function nWC(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
        <Link href={'/'}>
          <Image
            src={logo}
            height={'58px'}
            width={'58px'}
            alt="logo"
            className="logo"
          />
        </Link>
      </div>
      <div className={styles.cart_container} onClick={() => setCart(!cart)}>
        <Image
          src={cartIcon}
          height={'58px'}
          width={'58px'}
          alt="cart"
          className="cart"
        />
        {cartSum() > 0 ? (
          <div className={styles.cart_number}>
            <p>{cartSum()}</p>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={styles.cart_dropdown_card}>
        {cart && (
          <div className={styles.cart_container_div}>
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
              <h4>£{nWC(sumPrices())}</h4>
            </div>
            <Link href={'/checkout'} onClick={() => setCart(!cart)}>
              <button className={'btn-type-1 ' + styles.checkout_btn}>
                <h5>Checkout</h5>
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default MainNavigation;
