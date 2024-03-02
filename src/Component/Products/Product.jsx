import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { productInfo } from "../../Dataset";

function Product() {
  const [productsData, setProductsData] = useState(productInfo.products);
  const cartInfo = useSelector((state) => state.products);
  return (
    <div className='mainContainer'>
      <div className='header'>
        <div>totalQuantity : {cartInfo.totalQuantity}</div>
        <div>totalCost : {cartInfo.totalCost}</div>
        <div>{">"}</div>
      </div>
      <div className='container'>
        {productsData.map((product) => (
          <Card
            key={product.id}
            productInfo={product}
            setProductsData={setProductsData}
          />
        ))}
      </div>
    </div>
  );
}

export default Product;
