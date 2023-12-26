import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByID } from '../../AsyncActions/products';
import { useNavigate, useParams } from 'react-router-dom';
import s from './ProductPage.module.css';
import { BASE_URL } from '../../App';
import Amount from '../../UI/Counter/Counter';
import SalePercent from '../../UI/SalePercent/SalePercent';
import { addToCartNewItemAction } from '../../Store/shoppingCartReducer';
import ButtonUniversal from '../../UI/ButtonUniversal/ButtonUniversal';

const ProductPage = () => {
  const product = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [sentState, setSentState] = useState('Add to cart');

  const countOperation = (oper) => {
    if (oper === '-' && count > 1) {
      setCount(count - 1);
    } else if (oper === '+') {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    id <= 35 ? dispatch(fetchProductByID(id)) : navigate('/error');
    window.scrollTo(0, 0);
  }, [dispatch, id, navigate]);

  return (
    <div className={s.product}>
      <img className={s.img} src={`${BASE_URL}${product[0]?.image}`} alt={product[0]?.title} />
      <div className={s.textContent}>
        <h3>{product[0]?.title}</h3>
        <div className={`${s.productPrices}`}>
          {product[0]?.discont_price == null ? (
            <h3>${product[0]?.price}</h3>
          ) : (
            <>
              <div className={`${s.prices}`}>
                <h3>${product[0]?.discont_price}</h3>
                <p>${product[0]?.price}</p>
              </div>
              <SalePercent price={product[0]?.price} discountPrice={product[0]?.discont_price} />
            </>
          )}
        </div>
        <div className={`${s.flex}`}>
          <Amount id={id} count={count} operations={countOperation} />
        <ButtonUniversal
        type={'normal'}
        title={sentState}
            textColor={'white'}
            color={'green'}
            onClick={() => {
              dispatch(
                addToCartNewItemAction({
                  id: +id,
                  title: product[0]?.title,
                  price: product[0]?.price,
                  discount_price: product[0]?.discont_price,
                  count: count,
                  image: `${BASE_URL}${product[0]?.image}`,
                })
              );
              setSentState('Added');
              setTimeout(() => {
                setSentState('Add to cart');
              }, 500);
            }}
        />
        </div>
        <div className={`${s.text}`}>
          <p>Description</p>
          <sup>{product[0]?.description}</sup>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;