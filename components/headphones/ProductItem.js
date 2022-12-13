import styles from '../../styles/Products.module.scss'
import Image from 'next/image'
import Link from 'next/link'


function ProductItem(props) {

    
    const slicedSRC =  props.image.slice(1, props.image.length);  

    
    return (
            <li className={ styles.product_list }>
                <div className={ styles.product_list_image_container }>
                <Image 
                    src={ slicedSRC }  
                    width={ 540 }
                    height={ 560 }
                    alt="placeholder"
                    className={ styles.product_list_image }
                    />
                </div>
                <div className={ styles.product_list_content_container } >
                    { props.new && <p className='overline'>New Product</p> }
                    <div className={styles.product_n_title_block}>
                        <h2>{ props.name }</h2>
                        <h2>{ props.productCode }</h2>
                    </div>

                    <p>{ props.description }</p>
                    <Link href={ `products/${props.id}` }>
                    {/* <Link href={ `products/${props.slug}${props.id}` }> */}
                    <button className={`btn-type-1 ${ styles.zx9_see_product_button }`}>See product</button>
                    </Link>
                </div>
            </li>        
    )
}

export default ProductItem;