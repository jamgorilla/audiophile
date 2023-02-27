import Image from 'next/image';
import data from '../../data.json';
import styles from '../../styles/CartItem.module.scss';
import PlusMinus from '../elements/PlusMinus';
import { useState } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';

export default function CartItem({ id, quantity }) {
  const { dropCartincreaseQuantity, dropCartdecreaseQuantity } =
    useShoppingCart();

  //Stepper
  const [numvalue, setNumvalue] = useState(quantity);

  function stepper(e) {
    const change = e.target.innerHTML;

    const max = 50;
    const min = 1;

    if (change === ' - ' && numvalue > min) {
      setNumvalue((prev) => prev - 1);
      dropCartdecreaseQuantity(id, quantity - 1);
    } else if (change === ' + ' && numvalue < max) {
      setNumvalue((prev) => prev + 1);
      dropCartincreaseQuantity(id, quantity + 1);
    }
  }

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
          <h6 className={styles.full_name}>{data[id - 1].name}</h6>
          <h6 className={styles.mobile_name}>
            {data[id - 1].name.slice(
              0,
              data[id - 1].name.length - data[id - 1].category.length
            )}
          </h6>

          <h6 className={styles.cart_item_price}>
            {'£' + nWC(data[id - 1].price)}
          </h6>
        </div>
      </div>
      <div className={styles.cart_stepper}>
        <PlusMinus stepper={stepper} defaultValue={numvalue} value={numvalue} />
      </div>
    </li>
  );
}
