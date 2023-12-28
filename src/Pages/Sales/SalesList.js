import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './Sales.module.css';
import { Link } from 'react-router-dom';
import { fetchAllProductsSale } from '../../AsyncActions/products';
import ItemSales from './ItemSales';

export default function SalesList({count}) {
    
  const products = useSelector(store => store.products.products)
  const dispatch = useDispatch()
  console.log(products)
  

  useEffect(() => {
      dispatch(fetchAllProductsSale());
  }, [dispatch]); 

  console.log(count)


  return (
      <div className={`${s.SalesList}`}>
          {products.slice(0, 4).map((elem) => ( 
              <Link to={`/product/${elem.id}`} key={elem.id}>
                  <ItemSales image={elem.image} id={elem.id} title={elem.title} type='sales' price={elem.price} discount={elem.discont_price}/>
              </Link>
          ))}
      </div>
  );
}

