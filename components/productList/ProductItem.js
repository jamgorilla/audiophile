import styles from '../../styles/Products.module.scss';
import Image from 'next/image';
import Link from 'next/link';

// Product item component
function ProductItem(props) {
  function sliceSRC(input) {
    return input.slice(1, input.length);
  }

  return (
    <li className={styles.product_list}>
      <div className={styles.product_list_image_container}>
        <Image
          src={sliceSRC(props.imageDesktop)}
          width={540}
          height={560}
          alt="placeholder"
          className={styles.product_list_image_desktop}
        />
        <Image
          src={sliceSRC(props.imageMobile)}
          width={704}
          height={654}
          alt="placeholder"
          className={styles.product_list_image_mobile}
        />
      </div>
      <div className={styles.product_list_content_container}>
        {props.new && <p className="overline">New Product</p>}
        <div className={styles.product_n_title_block}>
          <h2>{props.name}</h2>
        </div>

        <p>{props.description}</p>
        <Link href={`products/${props.id}`}>
          <button className={`btn-type-1 ${styles.zx9_see_product_button}`}>
            See product
          </button>
        </Link>
      </div>
    </li>
  );
}

export default ProductItem;
