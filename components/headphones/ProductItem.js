import styles from '../../styles/Products.module.scss'
import Image from 'next/image'
import Link from 'next/link'


function ProductItem(props) {

    
    const slicedSRC =  props.image.slice(1, props.image.length);  


    
    return (
            <li className={ styles.product_list }>
                
                <h2>{ props.name }</h2>
                <p>{ props.description }</p>
                <Image 
                    src={ slicedSRC }  
                    width={100}
                    height={ 100 }
                    alt="placeholder"
                />
                <Link href={ `products/${props.id-1}` }>
                {/* <Link href={ `products/${props.slug}${props.id}` }> */}
                <button className={`btn-type-1 ${ styles.zx9_see_product_button }`}>See product</button>
                </Link>
            </li>        
    )
}

export default ProductItem;