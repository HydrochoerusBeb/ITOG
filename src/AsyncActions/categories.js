// import { BASE_URL } from "../App"
// // import { getAllCategoriesAction, getCategoryByIDAction } from "../store/categoriesReducer"
// import { getAllCategoriesAction, getCategoryByIDAction} from '../Store/categoriesReducer'

// export function fetchAllCategories() {
//     return function (dispatch) {
//         fetch(`${BASE_URL}categories/all`)
//             .then(res => res.json())
//             .then(data => dispatch(getAllCategoriesAction(data)))
//     }
// }

// export function fetchCategoryByID(id) {
//     return function (dispatch) {
//         fetch(`${BASE_URL}categories/` + id)
//             .then(res => res.json())
//             .then(data => dispatch(getCategoryByIDAction(data)))
//     }
// }


import { BASE_URL } from '../App';
import { getAllCategoriesAction, getCategoryByIDAction } from '../Store/categoriesReducer';

export const fetchAllCategories = () => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}categories/all`);
    const data = await response.json();
    dispatch(getAllCategoriesAction(data));
  } catch (error) {
    console.error('Error fetching all categories:', error);
  }
};

export const fetchCategoryByID = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}categories/` + id);
    const data = await response.json();
    dispatch(getCategoryByIDAction(data));
  } catch (error) {
    console.error('Error fetching category by ID:', error);
  }
};
