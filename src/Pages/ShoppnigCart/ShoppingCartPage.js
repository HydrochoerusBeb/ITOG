import React from 'react'
import s from './ShoppingCart.module.css'
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartList from './ShoppingCartList'
import OrderForm from './OrderForm';
import { useNavigate } from 'react-router-dom';
import ButtonUniversal from '../../UI/ButtonUniversal/ButtonUniversal';
import LocateButton from '../../UI/LocateButton/LocateButton';


export default function ShoppingCartPage() {

    const navigate = useNavigate()
    const basket = useSelector((store) => store.basket);


    return (

        <div className={`${s.basketPage}`}>
            <LocateButton header={'Shopping cart'} link={'/products/all'} linkText={'Back to the store'}/>
            {basket.length === 0 ?
                <div className={`${s.emptyBasket}`}>
                    <p>Looks like you have no items in your basket currently.</p>
                    <ButtonUniversal title={'Continue shopping'} color={'green'} textColor={'white'} size={'big'} onClick={() => navigate('/products/all')}/>
                </div> :
                <div className={`${s.basket}`}>
                    <ShoppingCartList />
                    <OrderForm />
                </div>

            }
        </div>
    )
}