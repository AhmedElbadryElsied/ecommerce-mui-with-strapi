import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'

function footer() {
  return (
    <Box
    
    sx={{
        bgcolor: "#283445",
        py:2,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    }}
    >
        <Box
        sx={{
            textAlign:"center"           
        }}>
        <Typography
        component="p"
        variant='p'
        >











            Designed and developed by

           
           



        <Button
        
        variant='text'
        sx={{
            mx:1
        }}
        >




        <Link
        href="https://www.facebook.com/?locale=ar_AR"
        variant='p'
        sx={{
            color:"#ff8a65",
            textDecoration:"none",
            fontWeight:"bold",
           
        }}
        >
            Ahmed Elbadry 
        </Link>





        </Button>



        &copy;2025



        </Typography>

       
    
        </Box>
    </Box>
  )
}

export default footer