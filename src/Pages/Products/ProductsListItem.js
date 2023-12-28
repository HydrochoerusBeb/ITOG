import React, { useState } from 'react';
import s from './Products.module.css';
import SalePercent from '../../UI/SalePercent/SalePercent';
import { useDispatch } from 'react-redux';
import { addToCartNewItemAction } from '../../Store/shoppingCartReducer';
import ButtonUniversal from '../../UI/ButtonUniversal/ButtonUniversal';
import { BASE_URL } from '../../App';

export default function ProductListItem({ id, title, image, price, discontPrice }) {

    const dispatch = useDispatch();

    const [sentState, setSentState] = useState('Add to cart')

    function showSalePercent() {
        if (discontPrice !== null) {
            return <SalePercent price={price} discountPrice={discontPrice} />;
        }
    }


    return (
        <div className={`${s.productListItem}`}>
            <div className={`${s.salePercentContainer}`}>{showSalePercent()}</div>
            <div className={`${s.imgContainer}`}>
                <img src={`${BASE_URL}${image}`} alt={title} className={`${s.img}`} />
                <div className={`${s.buttonContainer}`}>
                    <ButtonUniversal
                    type={'normal'}
                    className={`${s.addToCartButton}`}
                    title={sentState}
                    textColor={'white'}
                    color={'green'}
                    onClick={(e) => {
                        e.preventDefault();
                        setSentState('Added')
                        dispatch(addToCartNewItemAction({
                            id: +id,
                            title: title,
                            price: price,
                            discount_price: discontPrice,
                            count: 1,
                            image: image
                        }));
                        setTimeout(() => {
                            setSentState('Add to cart')
                        }, 200);
                    }}
                    />
                </div>
            </div>
            <p className={`${s.container}`}>{title}</p>
            {discontPrice == null ? (
                <h3>${price}</h3>
            ) : (
                <div className={`${s.prices}`}>
                    <h3>${discontPrice}</h3>
                    <p>${price}</p>
                </div>
            )}
        </div>
    );
}
