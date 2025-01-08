import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

const SingleProduct = () => {
  
  const [product , setProduct] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {id} = useParams()

  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
      .then(res => {
        console.log(res)
        setProduct(res)
      })
      .catch(err => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
    {error && <div>Error in Fetching data</div>}
    {loading && <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'95vh'}}><CircularProgress /></div>}
    {product && 
      <div className='d-flex flex-wrap justify-content-center align-items-center gap-3 border m-5 shadow p-3'>
          
          <div className='d-flex flex-column justify-content-center align-items-start shadow p-4' style={{width: '40%'}}>
          <p className='fs-2'>{product.title}</p>
          <p className='fs-3'>Brand: {product.brand}</p>
          <p>{product.description}</p>
          <p>width: {product.dimensions.width} height: {product.dimensions.height} depth: {product.dimensions.depth}</p>
          <p>Rs. {product.price}</p>
          <p>{product.returnPolicy}</p>
          <p>{product.shippingInformation}</p>
          </div>
          
          <div className='shadow' style={{width: '40%'}}>
            <img src={product.thumbnail} alt="logo" className='w-100'/>
          </div>
      
      </div>}
    </>
  )
}

export default SingleProduct
