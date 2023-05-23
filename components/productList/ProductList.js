import styles from '../../styles/Products.module.scss';
import ProductItem from './ProductItem';

// Product list component
function ProductList(props) {
  const productArray = ['Headphones', 'Speakers', 'Earphones'];

  return (
    <>
      <div className={styles.white_line_container}>
        <div className={styles.white_line}></div>
      </div>
      <div className={styles.product_list_ul_category}>
        <h2>{productArray[props.productCode - 1]}</h2>
      </div>
      <ul className={styles.product_list_ul}>
        {props.data.map((element) =>
          element.productCode === props.productCode ? (
            <ProductItem
              name={element.name}
              description={element.description}
              imageDesktop={element.image.desktop}
              imageMobile={element.image.mobile}
              new={element.new}
              id={element.id}
              key={element.id}
              slug={element.slug}
              productCode={productArray[element.productCode - 1]}
            />
          ) : (
            ''
          )
        )}
      </ul>
    </>
  );
}

export default ProductList;
