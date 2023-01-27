import ProductList from '../components/productList/ProductList';
import NavList from '../components/mainNavigation/NavList';
import BestAudio from '../components/section/BestAudio';
import navListData from '../navListData.json';

import data from '../data.json';

function Headphones() {
  return (
    <div>
      <ProductList data={data} productCode={1} />
      <NavList navigationArray={navListData} />
      <BestAudio />
    </div>
  );
}

export default Headphones;
