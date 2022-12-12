import { useRouter } from 'next/router';
import ProductDetail from '../../components/products/ProductDetail';
import data from '../../data.json'
import Image from 'next/image';
import styles from '../../styles/ProductDetail.module.scss'
import { useState } from 'react'
import PlusMinus from '../../components/elements/PlusMinus'
import Link from 'next/link';

function IndividualProductPage(props) {
    const router = useRouter();

    const productid = router.query.productid;

    console.log( "IS OBJECT DEFINED", productid, data[productid] )

    let src = data[productid].image.desktop;

    const slicedSRC = src.slice(1, src.length )

    // console.log(slicedSRC)

    //Stepper

    console.log( router )

    const [numvalue, setNumvalue] = useState(1);

    function stepper(e) {
      const change = e.target.innerHTML;

      const max = 5;
      const min = 1;
      
      if (change === " - " && numvalue > min) {
        setNumvalue((prev) => prev-1);
      } else if (change === " + " && numvalue < max) {
        setNumvalue((prev) => prev+1);
      }
  
    }


    return ( 
        <div className={ styles.product_detail_body }>
        <p className={styles.back_button} onClick={ function goBack( ) { history.back() } }>Go Back</p>
        <div className={ styles.top_product_detail_grid }>
            <Image 
                src={ slicedSRC  }
                className={ styles.top_product_detail_image }
                alt="placeholder"
                width={540}
                height={560}
                />
            {/* <h1 className={ styles.product_detail_id }>{ productid }</h1> */}
            
            <p className={ 'overline ' + styles.product_detail_new_product }>{ data[productid].new && "New Product" }</p>
            <h2 className={ styles.product_detail_name }>{ data[productid].name }</h2>
            <p className={ styles.product_detail_description }>{ data[productid].description }</p>
            <p className={ styles.product_detail_price }>{ "$" + data[productid].price }</p>
            <div className={ styles.product_detail_stepper_button_container }>
                <PlusMinus stepper={ stepper } defaultValue={ numvalue } value={ numvalue }/>
                <button className='btn-type-1'>Add to Cart</button>

            </div>
        </div>

        </div>
    );
}

// export async function getStaticPaths() {
//     return {
//         fallback: false,
//         paths: [
//             { 
//                 params: {
//                 projectid: "1",
//             },
//         },
//         {
//             params: {
//                 projectid: "2",
//             }
//         },
//         {
//             params: {
//                 projectid: "3",
//             }
//         },
//         {
//             params: {
//                 projectid: "4",
//             }
//         }
//         ]
//     }
// }



export default IndividualProductPage;