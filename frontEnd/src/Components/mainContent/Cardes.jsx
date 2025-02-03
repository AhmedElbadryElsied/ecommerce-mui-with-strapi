import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating, Stack } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

function Cardes({item,handleClickOpen}) {
  return (
    <Card sx={{mt:5, maxWidth: 270 }}>
    <CardMedia
      sx={{ height: 200 }}
      image={`${process.env.REACT_APP_BASE_URL}${item.productImg[0].url}`}
      title="green iguana"
    />
    <CardContent>


    <Stack
    
    direction="row"
    justifyContent= "space-between"
    alignItems="center"
    >

    <Typography 
      sx={{
        fontSize:"22px",
      }}
      gutterBottom variant="h5" component="div">
        {item.productTitle}
      </Typography>
    <Typography 
      sx={{
        fontSize:"17px",
      }}
      gutterBottom variant="h5" component="div">
        ${item.productPrice}
      </Typography>

    </Stack>

      



      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      {item.productDescription}
      </Typography>




    </CardContent>



    <CardActions
    
    sx={{
        justifyContent:"space-between"
    }}
    
    >
      <Button size="small"
      
      onClick={handleClickOpen}
      
      >

      <AddShoppingCart 
      
      fontSize='small'
      sx={{
        mr:"10px"
      }}
      
      />

      Add To Cart 

      </Button>

      {/* <Rating  defaultValue={2.5} precision={0.5} name="read-only" value={3} readOnly /> */}

      <Rating sx={{fontSize:"18px"}} name="half-rating-read" defaultValue={item.productRating} precision={0.5} readOnly />
      
    </CardActions>
  </Card>
  )
}

export default Cardes