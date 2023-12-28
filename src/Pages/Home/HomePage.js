import Banner from '../../Components/Banner/Banner';
import FormForDiscount from '../../Components/FormForDiscount/FormForDiscount';
import LocateButton from '../../UI/LocateButton/LocateButton';
import CategoryList from '../Categories/CategoriesList';
import ProductsList from '../Sales/SalesList';


function HomePage(){

    return(
        <div>
            <Banner/>
            <LocateButton header={'Categories'} link={'/categories/all'} linkText={'All categories'} />
            <CategoryList count={4}/>
            <FormForDiscount/>
            <LocateButton header={'Sales'} link={'/products/sales'} linkText={'All sales'}/>
            <ProductsList title={'Categories'} type={'homesale'} displayCount={4} />
        </div>
    )
}

export default HomePage