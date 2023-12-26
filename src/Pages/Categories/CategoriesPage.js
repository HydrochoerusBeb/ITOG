import React from 'react';
import s from './CategoriesPage.module.css';
import CategoryList from './CategoriesList';
import { useSelector } from 'react-redux';

export default function CategoriesPage() {
    const category = useSelector((store) => store.categories);

    return (
        <div className={`${s.categoriesPage}`}>
            <h2>{category.categoriesName}</h2>
            <CategoryList displayCount={5} />
        </div>
    );
}
