import { getAllCategoriesAction } from "../Store/categoriesReducer"
import { BASE_URL } from "../App";
import { getProductAction } from "../Store/newred";
 
export function fetchCategoriesList(){
  return function(dispatch) {
    fetch(`${BASE_URL}categories/all`)
      .then(res => res.json())
      .then(data => dispatch(getAllCategoriesAction(data)));
      console.log(dispatch)
      
  }
}