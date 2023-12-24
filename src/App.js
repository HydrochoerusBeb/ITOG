import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CategoryPage from './Pages/Categories/CategoriesPage';
import ProductsListPage from './Pages/Products/ProductsListPage';
import ProductPage from './Pages/Product/ProductPage';
import ShoppingCartPage from './Pages/ShoppnigCart/ShoppingCartPage';
import OneCategoryPage from './Pages/OneCategory/OneCategoryPage'

export const BASE_URL = 'http://localhost:3333/'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/categories/all' element={<CategoryPage/>}/>
          <Route path='/categories/:id' element={<OneCategoryPage/>}></Route>
          <Route path='/products/all' element={<ProductsListPage type={'all'} title={'All Products'}/>}></Route>
          <Route path='/products/:id' element={<ProductPage />}></Route>
          <Route path='/products/sales' element={<ProductsListPage type={'sale'} title={'Discounted'}/>}></Route>
          <Route path='/shopping_cart' element={<ShoppingCartPage />}></Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
