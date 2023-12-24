import Banner from '../../Components/Banner/Banner';
import FormForDiscount from '../../Components/FormForDiscount/FormForDiscount';
import ButtonLine from '../../UI/ButtonLine/ButtonLine';
import CategoryList from '../Categories/CategoriesList';
import ProductsList from '../Products/ProductsList';


function HomePage(){

    return(
        <div>
            <Banner/>
            <ButtonLine title={'Categories'} link={'/categories/all'} linkText={'All categories'} />
            <CategoryList displayCount={4}/>
            <FormForDiscount/>
            <ProductsList title={'Categories'} type={'homesale'} displayCount={4} />
        </div>
    )
}

export default HomePage