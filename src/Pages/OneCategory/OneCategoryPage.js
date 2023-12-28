import s from './OneCategoryPage.module.css'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts, fetchAllProductsSale, fetchProductsByCategories} from "../../AsyncActions/products"
import { useLocation, useParams } from "react-router-dom"
import { filterByPriceAction, filterBySaleAction} from "../../Store/prodsReducer"
import CardOfProduct from '../../Components/CardOfProduct/CardOfProduct'

export default function UniversalProductPage({type}){
  console.log(type)
    let {categories_name, products} = useSelector(store => store.products)
    const dispatch = useDispatch()
    const location = useLocation()
    const {id} = useParams()
    console.log(id)

    const [selectedOption, setSelectedOption] = useState('default');
    const handleSortChange = (event) => {
        setSelectedOption(event.target.value);
      };
      console.log(products)

  useEffect(() => {
    switch (type) {
      case 'all':
        dispatch(fetchAllProducts());
        break;
      case 'sale':
        dispatch(fetchAllProductsSale());
        break;
      case 'categories':
        dispatch(fetchProductsByCategories(id));
        break;
      default:
        break;
    }
    
    document.body.scrollIntoView({ behavior: 'smooth' });
  }, [location.pathname, type, id]);

  
  function checkboxHandle(e){
    let data = {}
    data.checked = e.target.checked
    data.typeSale = categories_name
    console.log(categories_name)
    dispatch(filterBySaleAction(data))
    console.log(data.checked)
}

function formHandler(e){
    let form_data = new FormData(e.target.parentElement)
    let data = Object.fromEntries(form_data)
    data.min = (data.min) ? +data.min : 0
    data.max = (data.max && (+data.max >= data.min)) ? +data.max : Infinity
    data.type = categories_name
    dispatch(filterByPriceAction(data))
    console.log(categories_name)
}

products = products.filter(elem => elem.isShowSale  && elem.isShowPrice)
console.log(products)

if (selectedOption === "price-up"){
    products.sort((a, b) => a.price - b.price);
} else if (selectedOption === "price-down"){
    products.sort((a, b) => b.price - a.price);
}
return(
    <div className={s.ProductsContainer}>
        <h2 className={s.ProductsShownName}>{categories_name}</h2>

        <div className={s.FiltrationBar}>
            <form className={s.SingleFilterBar} onChange={formHandler}>
                <p className={s.FilterName}>Price</p>
                <input className={s.InputBar} name='min' placeholder="from" type="number"/>
                <input className={s.InputBar} name="max" placeholder='to' type="number"/>
            </form>
{  (type !== 'sale')  &&  <label className={s.SingleFilterBar}> 
            <p className={s.FilterName}>Discounted items</p>
                <input className={s.CheckBox} onClick={checkboxHandle} type="checkbox"/>
            </label>}
            <div className={s.SingleFilterBar} onChange={handleSortChange}>
            <p className={s.FilterName}>Sort</p>
            <select className={s.SortList} value={selectedOption}>
                <option value="default">Default</option>
                <option value="default">Newest</option>
                <option value="price-up">Price Up</option>
                <option value="price-down">Price Down</option>
            </select>   
            </div>

        </div>

        <ul className={s.CardsList}>
            {products.map(elem => 
              <CardOfProduct img={elem.image} title={elem.title} id = {elem.id} price = {elem.price} discount_price = {elem.discont_price}/>
            )}
        </ul>
    </div>
)
}
