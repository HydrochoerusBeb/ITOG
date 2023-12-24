
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchCategoryByID } from '../../AsyncActions/categories';
import ProductListItem from '../Products/ProductsListItem';
import Filter from '../../UI/FIlter/Filter';
import s from './OneCategoryPage.module.css';
import { BASE_URL } from '../../App';

const OneCategoryPage = () => {
  const category = useSelector((store) => store.categories);
  const filteredData = category.data.filter((el) => el.isShowSale && el.isShowPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    id <= 5 ? dispatch(fetchCategoryByID(id)) : navigate('/error');
  }, [dispatch, id, navigate]);

  return (
    <div className={s.categoryPage}>
      <h2>{category.categories_name}</h2>
      <Filter />
      <div className={s.productsList}>
        {filteredData.map((el) => (
          <Link to={`/products/${el.id}`} key={el.id} className={s.productLink}>
            <ProductListItem
              id={el.id}
              title={el.title}
              image={`${BASE_URL}${el.image}`}
              price={el.price}
              discontPrice={el.discont_price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OneCategoryPage;