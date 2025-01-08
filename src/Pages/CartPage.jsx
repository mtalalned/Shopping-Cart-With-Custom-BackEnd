import React from 'react'
import { useSelector } from 'react-redux'
import MultiActionSingleAreaCard from '../components/Card copy'
import { Box , Typography} from '@mui/material'

const CartPage = () => {
  
  const selector = useSelector(state => state.cart.cart)

    return (
    <Box sx={{marginTop:'100px'}} className='d-flex flex-column justify-content-start align-items-center gap-3'>
    <Typography sx={{backgroundColor:'#1976d2'}} variant='h5' className='text-white py-1 rounded-1 d-flex justify-content-center align-items-center px-5'>
        Your Cart
    </Typography>
    <Typography variant='h4' className='text-center'>
        Total Price: Rs. {(selector.reduce ((acc , CVal)=> {
            return acc + CVal.price * CVal.quantity
        } , 0)).toFixed(2)}
    </Typography>
    <Box className='d-flex flex-wrap justify-content-center align-items-center gap-4'>
      {selector.map ((item , index) => {
        return <MultiActionSingleAreaCard title = {item.title} price={item.price} description={item.description} src={item.thumbnail} wholeitem={item}/>
      })}
    </Box>
    </Box>
  )
}

export default CartPage
