
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import ProductListing from './component/ProductListing';
import ProductDetail from './component/ProductDetail';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
   
     {/* <Header/> */}
     <Routes>
    
      <Route path='/' element = {<Home/>}/>
<Route path='/ProductListing' element={<ProductListing/>}/>
<Route path='/ProductDetail/:productId' element={<ProductDetail/>}/>

     </Routes>
    </div>
  );
}

export default App;
