

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './CategoriesPage.module.css';
import CategoryItem from './CategoryItem';
import { BASE_URL } from '../../App';
import { Link } from 'react-router-dom';
import { fetchAllCategories } from '../../AsyncActions/categories';

export default function CategoryList({ displayCount }) {
    const { data } = useSelector((store) => store.categories);
    const displayedItems = data.slice(0, displayCount);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCategories());
    }, [dispatch]);

    return (
        <div className={`${s.categoriesList}`}>
            {displayedItems.map((el) => (
                <Link to={`/categories/${el.id}`} key={el.id}>
                    <CategoryItem id={el.id} title={el.title} src={`${BASE_URL + el.image}`} />
                </Link>
            ))}
        </div>
    );
}
