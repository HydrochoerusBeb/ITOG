import { Link } from "react-router-dom";
import icon from "../../img/icon.svg"
import logo from "../../img/logo.png"
import s from './header.module.css'


function Header(){


    return(
        <div className={`${s.header}`}>
            <Link>
            <img className={`${s.logo}`} src={logo} alt=""/>
            </Link>
                <div  className={`${s.nav__bar}`}>
                    <Link className={`${s.nav__barElem}`} to={'/'}>
                        <p className={`${s.nav__barText}`}>Main page</p>
                    </Link>
                    <Link className={`${s.nav__barElem}`} to={'/categories'}>
                        <p className={`${s.nav__barText}`}>Categories</p>
                    </Link>
                    <Link className={`${s.nav__barElem}`} to={'/all-products'}>
                        <p className={`${s.nav__barText}`}>All products</p>
                    </Link>
                    <Link className={`${s.nav__barElem}`} to={'/'}>
                        <p >All sales</p>
                    </Link>
                </div>
            <Link>
                <img className={`${s.icon}`} src={icon} alt=""/>
            </Link>

        </div>
    )
}

export default Header