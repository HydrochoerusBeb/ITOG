import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { productsReducer } from './prodsReducer'
import { shoppingCartReducer } from './shoppingCartReducer'
import { categoriesReducer } from './categoriesReducer'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    basket: shoppingCartReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))