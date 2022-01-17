import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home'
import CourseDetail from './component/CourseDetail/CourseDetail';
import JobCard from './component/JobAreaCard/JobCard';
import Discuss from './component/Discuss/Discuss';
import Footer from './component/Footer/Footer';
import Navbar from './component/Home/Navbar';
import SliderComp from './component/Home/SliderComp';
import Shop from './component/Shop/Shop';
import {Provider} from 'react-redux'
import store from './redux/store'
import { Routes, Route, Link } from "react-router-dom";
import CartModal from './component/Shop/Products/CartModal';
import Modal from 'react-modal';

function App() {
  return (

 <Provider store={store}>
 <Routes>
 
 <Route path="/" element={<Home />} />
 <Route path="shop" element={<Shop/>} />
 <Route path="/product/:productKey" element={<CartModal/>}/>
 
</Routes>

 </Provider>

  );
}

export default App;
