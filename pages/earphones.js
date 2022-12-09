import ProductList from '../components/headphones/ProductList'
import data from '../data.json'


function Headphones() {

    return (
                <div>
                    <ProductList data={ data } productCode={ 3 }/>
                </div>
    )
}

export default Headphones;