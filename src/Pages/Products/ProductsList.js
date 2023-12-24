import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, fetchAllProductsSale } from '../../AsyncActions/products';
import ProductListItem from './ProductsListItem';
import s from './Products.module.css';
import { Link, useLocation } from 'react-router-dom';
import { BASE_URL } from '../../App';
import Filter from '../../UI/FIlter/Filter';

const ProductsList = ({ type, displayCount, salesRef }) => {
  const allProducts = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (type === 'all') {
      dispatch(fetchAllProducts());
    } else if (type === 'sale' || type === 'homesale') {
      dispatch(fetchAllProductsSale());
    }
  }, [location.pathname, type, dispatch]);

  let displayedProducts = [...allProducts];

  if (type === 'homesale') {
    displayedProducts.sort((a, b) => {
      const discountPercentageA = ((a.price - a.discont_price) / a.price) * 100;
      const discountPercentageB = ((b.price - b.discont_price) / b.price) * 100;
      return discountPercentageB - discountPercentageA;
    });

    displayedProducts = displayedProducts.slice(0, displayCount);
  }

  return (
    <>
      {type !== 'homesale' && <Filter />}
      <div className={`${s.productsList}`} ref={salesRef}>
        {displayedProducts.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <ProductListItem
              id={product.id}
              title={product.title}
              image={`${BASE_URL}${product.image}`}
              price={product.price}
              discontPrice={product.discont_price}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
