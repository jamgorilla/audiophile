import styles from '../../styles/Products.module.scss'
import ProductItem from './ProductItem'


function ProductList(props) {

    //console.log("PROO", props.productCode )


    
    return (
                <ul>
                   { props.data.map((element) => (
                     element.productCode === props.productCode ?
                        <ProductItem 
                            name={element.name} 
                            description={ element.description }
                            image={element.image.tablet }
                            id={ element.id }
                            key={ element.id }
                            slug={ element.slug }
                        /> : ''
                    
                    ))}
                </ul>
    )
}

export default ProductList;