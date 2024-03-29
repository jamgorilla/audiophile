import Image from 'next/image';
import data from '../../data.json';
import styles from '../../styles/CartItem.module.scss';
import { useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

// Cart item component
export default function CartItem({ id, quantity }) {
  const { dropCartincreaseQuantity, dropCartdecreaseQuantity } =
    useShoppingCart();

  //Stepper
  const [numvalue, setNumvalue] = useState(quantity);

  function nWC(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <li className={styles.cart_item_li}>
      <div className={styles.left_seperator}>
        <div className={styles.cart_item_img_container}>
          <Image
            src={data[id - 1].categoryImage.mobile.slice(1)}
            width={100}
            height={100}
            alt="Product Image"
          />
        </div>
        <div className={styles.cart_item_description_container}>
          <h6>{data[id - 1].name}</h6>
          <h6 className={styles.cart_item_price}>
            {'£' + nWC(data[id - 1].price)}
          </h6>
        </div>
      </div>
      <div className={styles.cart_stepper}>
        <p>x {numvalue}</p>
      </div>
    </li>
  );
}
