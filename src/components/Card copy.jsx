import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addQuantityToItem ,deleteFromCart,lessQuantityToItem} from '../Config/redux/reducers/CartSlice';

export default function MultiActionSingleAreaCard({title , description , src , price, wholeitem}) {

  const dispatch = useDispatch()

  const addQuantity = (items) => {
    dispatch(addQuantityToItem(items))
  }

  const lessQuantity = (items) => {
    dispatch(lessQuantityToItem(items))
  }

  const deleteItem = (items) => {
    dispatch(deleteFromCart(items))
  }

  return (
    <Card sx={{ maxWidth: 300}} className='shadow border rounded-3'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={src}
          alt="green iguana"
        />
        <CardContent className='d-flex flex-column gap-2'>
          <Typography gutterBottom variant="h5" component="div">
            {title.slice(0 , 20)}....
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' , marginTop: '-15px' }}>
          {description.slice(0 , 75)}....
          </Typography>
          <Typography variant="body2" className='fs-5' sx={{ color: 'text.secondary' }}>
            Rs. {price}
          </Typography>
          <Box className='d-flex justify-content-start align-items-center gap-2'>
              <Button variant="contained" className='bg-primary.bg-gradient' sx={{width:'30px' , height: '30px' , minWidth: '0' }} onClick={()=>addQuantity(wholeitem)}>+</Button>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {wholeitem.quantity}
              </Typography>
              <Button variant="contained" className='bg-primary.bg-gradient' sx={{width:'30px' , height: '30px' , minWidth: '0'}} onClick={()=>lessQuantity(wholeitem)}>-</Button>
          </Box>
          <Box className='bg-success text-white p-2 rounded-1 d-flex justify-content-center align-items-center'>
            Price of this Item: Rs. {(wholeitem.quantity * price).toFixed(2)}
          </Box>
          <Button variant="contained" color='error' onClick={()=>deleteItem(wholeitem)}>Remove From Cart</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
