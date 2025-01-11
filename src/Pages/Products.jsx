import React, { useState , useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import MultiActionAreaCard from '../components/Card';
import { Button } from '@mui/material'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Config/redux/reducers/CartSlice';
import axios from 'axios'

const Products = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
      .then(res => {
        setProduct(res.products)
      })
      .catch(err => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  
  const navigate = useNavigate()

  const SingleProduct = (items) => {
    navigate(`/product/${items.id}`)
  }

  const SignOut = async ()=> {

    try {
      const logOutUser = await axios.post ('https://plain-toinette-mtkconsultant-b465e3eb.koyeb.app/api/v1/logout')
      console.log (logOutUser)
      if(logOutUser.data.message === 'user logout successfully') {
        localStorage.removeItem('accessToken')
        navigate('/')
      }
    } catch (error) {
      console.log (error)
    }
  }

  const dispatch = useDispatch()

  const selector = useSelector(state => state.cart.cart)
  console.log (selector)

  const addCart = (items)=> {
    // console.log (items)
    dispatch(addToCart(items))

  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center gap-3' style={{paddingTop: '80px'}}>
      {error && <div>Error in Fetching data</div>}
      {loading && <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'80vh'}}><CircularProgress size='4rem'/></div>}
      {product && <div className='d-flex flex-wrap flex-column justify-content-start align-items-center'>
        <p className='fs-1 fw-bold'>ALL PRODUCTS</p>
        <Button variant="contained" sx={{width:'150px'}} onClick={SignOut}>SIGNOUT</Button>
        <div className='d-flex flex-wrap justify-content-center align-items-center gap-4 py-5'>
        {product.map ((items)=>{
        return <MultiActionAreaCard key={items.id} title={items.title} description={items.description} src={items.thumbnail} price={items.price} func={() => SingleProduct(items)} func2={addCart} item={items}/>
        })}
        </div>
    </div>}
    </div>
  )
}

export default Products