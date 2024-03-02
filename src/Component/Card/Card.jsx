import "./Card.css";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addProduct,
  reduceProduct,
  removeProduct,
} from "../../productSlice/productSlice";

const Card = ({ productInfo, setProductsData }) => {
  const dispatch = useDispatch();
  const cartInfo = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(addToCart(productInfo));
  }, []);

  const removeClick = useCallback(() => {
    dispatch(removeProduct(productInfo));
    setProductsData((pre) =>
      pre.filter((product) => product.id != productInfo.id)
    );
  }, []);

  return (
    <div>
      <div className='card'>
        <div id={"carousel" + productInfo.id} className='carousel slide'>
          <div className='carousel-inner'>
            {productInfo.images?.map((image, idx) => (
              <div
                className={
                  idx === 0 ? "carousel-item active" : "carousel-item "
                }
                key={idx + "" + productInfo.id}
              >
                <img src={image} className='d-block w-100' alt='Logo' />
              </div>
            ))}
          </div>
          {productInfo.images?.length > 1 && (
            <>
              <button
                className='carousel-control-prev'
                type='button'
                data-bs-target={"#" + "carousel" + productInfo.id}
                data-bs-slide='prev'
              >
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Previous</span>
              </button>
              <button
                className='carousel-control-next'
                type='button'
                data-bs-target={"#" + "carousel" + productInfo.id}
                data-bs-slide='next'
              >
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                ></span>
                <span className='visually-hidden'>Next</span>
              </button>
            </>
          )}
        </div>
        <hr />
        <div className='productInfo'>
          <div className='descriptionPart'>
            <div className='productName center'>{productInfo.title}</div>
            <div className='ProductCost center'>{productInfo.price}</div>
          </div>
          <div>
            <b>Brand : </b>
            {productInfo.brand}
          </div>
          <div>
            <div>
              <b>Description : </b>
            </div>
            <div className='description' title={productInfo.description}>
              {productInfo.description}{" "}
            </div>
          </div>
          <div>
            <div className='productManipulate'>
              <div className='productEdit'>
                <button className='removeButton center' onClick={removeClick}>
                  Remove
                </button>
                <button
                  className='subButton center'
                  onClick={() =>
                    cartInfo[productInfo.id]?.quantity > 1 &&
                    dispatch(reduceProduct(productInfo))
                  }
                >
                  -
                </button>
                <div className='quantity center'>
                  {cartInfo[productInfo.id]?.quantity}
                </div>

                <button
                  className='addButton center'
                  onClick={() => dispatch(addProduct(productInfo))}
                >
                  +
                </button>
              </div>
              <div className='totalCost center'>
                {cartInfo[productInfo.id]?.totalCost}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
