import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import {setProducts} from '../redux/action/productsActions'  

function ProductListing() {
  const products = useSelector((state)=>state.allProducts.products);
  console.log(products);
  const dispatch = useDispatch()

  const fetcProdects =async()=>{
    const response =await axios
    .get('https://fakestoreapi.com/products')
    .catch((error)=>{
      console.log("errors",error);
    })
    dispatch(setProducts( response.data));
  }
  useEffect(()=>{
  fetcProdects()
  },[])
  return (
    <div className='ui grid container'>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing
