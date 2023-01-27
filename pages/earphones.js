import ProductList from '../components/productList/ProductList';
import data from '../data.json';
import NavList from '../components/mainNavigation/NavList';
import BestAudio from '../components/section/BestAudio';
import navListData from '../navListData.json';

function Headphones() {
  return (
    <div>
      <ProductList data={data} productCode={3} />
      <NavList navigationArray={navListData} />
      <BestAudio />
    </div>
  );
}

export default Headphones;
