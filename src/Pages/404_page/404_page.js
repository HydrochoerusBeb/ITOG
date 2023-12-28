import React from 'react'
import s from './404_page.module.css'
import {useNavigate} from 'react-router-dom'
import ButtonUniversal from '../../UI/ButtonUniversal/ButtonUniversal'

export default function Error() {

    const navigate = useNavigate()
    
    return (
        <div className={`${s.notFoundPage}`}>
            <div className={`${s.error}`}></div>
            <h2>Page not Found</h2>
            <p>We’re sorry, the page you requested could not be found.<br />
                Please go back to the homepage.</p>
            {/* <Button onClick={() => navigate('/')} title={'Go home'} color={'green'} textColor={'white'} /> */}
            <ButtonUniversal onClick={() => navigate('/')} title={'Go home'} color={'green'}  />
        </div>
    )
}