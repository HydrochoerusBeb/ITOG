import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
