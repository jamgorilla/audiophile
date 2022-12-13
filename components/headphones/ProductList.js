import styles from '../../styles/Products.module.scss'
import ProductItem from './ProductItem'


function ProductList(props) {

    //console.log("PROO", props.productCode )

    const productArray = ['Headphones','Speakers','Earphones'];

    
    return (
                <ul className={styles.product_list_ul}>
                    <div className={ styles.white_line_container }>
                        <div className={ styles.white_line }>
                        </div>
                    </div>
                    <div className={ styles.product_list_ul_category }>
                        <h2>{ productArray[props.productCode-1] }</h2>
                    </div>
                   { props.data.map((element) => (
                     element.productCode === props.productCode ?
                        <ProductItem 
                            name={element.name} 
                            description={ element.description }
                            image={element.image.desktop }
                            new={ element.new }
                            id={ element.id }
                            key={ element.id }
                            slug={ element.slug }
                            productCode={ productArray[element.productCode-1] }
                        /> : ''
                    
                    ))}
                </ul>
    )
}

export default ProductList;