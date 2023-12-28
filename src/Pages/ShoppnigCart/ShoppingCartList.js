import React from 'react'
import s from './ShoppingCart.module.css'
import BasketListItem from './ShoppnigCartPageItem';
import { useSelector } from 'react-redux';

export default function ShoppingCartList() {
    const shopping_cart = useSelector((store) => store.shopping_cart);
    return (
        <div className={`${s.basketList}`}>
            {shopping_cart.map(el => {
                return <BasketListItem
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    price={el.price}
                    image={el.image}
                    discountPrice={el.discount_price}
                    count={el.count}
                />
            })}
        </div>
    )
}