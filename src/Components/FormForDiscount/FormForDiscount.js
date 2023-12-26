import React, { useState } from 'react'
import s from './FormForDiscount.module.css'
import { useForm } from 'react-hook-form'
import ButtonUniversal from '../../UI/ButtonUniversal/ButtonUniversal'
import { BASE_URL } from '../../App'

export default function FormForDiscount() {

    const [discountButtonText, setDiscountButtonText] = useState('Get a discount')

    function changeInnerText(text) {
        setDiscountButtonText(text)
    }

    let {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({ mode: 'onSubmit' })

    const onSubmit = async (data) => {
        reset()
        changeInnerText('Request submitted')
        let response = await fetch(`${BASE_URL}sale/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data })
        })
        const res = await response.json()
        alert(`Dear ${data.Name} your ${res.message}`)
    }

    let inputName = {
        ...register('Name', {
            required: 'Name is required'
        })
    }

    let inputPhone = {
        ...register('Phone', {
            required: 'Phone number is required',
            pattern: {
                value: /^(\+7|8)\s?\(?(\d{3})\)?\s?\d{3}[- ]?\d{2}[- ]?\d{2}$/,
                message: 'Phone should match the pattern (+7|8)(XXX)XXX-XXX'
            }
        })
    }

    let inputEmail = {
        ...register('Email', {
            required: 'Email is required',
            pattern: {
                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Email should match the pattern'
            }
        })
    }

    return (
        <div className={`${s.FormForDiscount}`}>
            <h2>5% off on the first order</h2>
            <div className={`${s.Content}`}>
                <div className={`${s.Hands}`}></div>
                <form onSubmit={handleSubmit(onSubmit)} className={`${s.Form}`}>
                    <input
                        disabled={(discountButtonText === 'Request submitted' ? true : false)}
                        placeholder='Name'
                        {...inputName} >
                    </input>

                    {errors.Name && <p className={`${s.ErrorText}`}>{errors.Name.message}</p>}
                    <input
                        disabled={(discountButtonText === 'Request submitted' ? true : false)}
                        placeholder='Phone number'
                        {...inputPhone} >
                    </input>

                    {errors.Phone && <p className={`${s.ErrorText}`}>{errors.Phone.message}</p>}
                    <input
                        disabled={(discountButtonText === 'Request submitted' ? true : false)}
                        placeholder='Email'
                        {...inputEmail} >
                    </input>
                    {errors.Email && <p className={`${s.ErrorText}`}>{errors.Email.message}</p>}
                    <ButtonUniversal title={discountButtonText} color={'green'} type={'disc'}/>
                </form>
            </div>
        </div>
    )
}
