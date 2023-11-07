import { useEffect, useState } from 'react';
import styles from '../../styles/Admin.module.scss';

import { db } from '../../firebase/firebase';
import { getDocs, collection } from 'firebase/firestore';

function ProductList() {
  const [productList, setProductList] = useState([]);

  const productCollectionRef = collection(db, 'products');

  useEffect(() => {
    const getProductList = async () => {
      //READ product LIST

      // SET THE product LIST
      try {
        const data = await getDocs(productCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        setProductList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getProductList();
  }, []);

  return (
    <div className={styles.list_holder}>
      <div className={styles.list_container}>
        <div className={styles.titleList}>
          <ul className={styles.titleRow}>
            <li>Title</li>
            <li>Price</li>
            <li>Category</li>
            <li>Product ID</li>
          </ul>
        </div>
        <div className={styles.generatedList}>
          {productList.map((product) => (
            <ul className={styles.generatedRow} key={product.id}>
              <li>{product.title}</li>
              <li>{product.price}</li>
              <li>{product.category}</li>
              <li>{product.id}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
