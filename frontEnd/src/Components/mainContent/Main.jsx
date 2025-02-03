import {
  Box,
  Container,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
  useTheme,
Dialog,
IconButton,
} from "@mui/material";
import {
 

} from "@mui/material";
import React, { useState } from "react";
import "./main.css";
import Cardes from "./Cardes";
import ProductDetails from "./ProductDetails";
import { Close } from "@mui/icons-material";
import { useGetproductByNameQuery } from "../../Redux/product";




function Main() {


  const  AllProductsApi ="products?populate=*";
  const  menProductsApi ="products?populate=*&filters[productCategory][$eq]=men";
  const  womenProductsApi ="products?populate=*&filters[productCategory][$eq]=women";


  // data mapping for toggle button


  const [alignment, setAlignment] = useState("left");

  const handleAlignment = ( newAlignment) => {
    setAlignment(newAlignment);
  };

  const theme = useTheme();


   const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const ArrangingData= (value) =>{
      setproductsApi(value)
    }


    
    const [productsApi, setproductsApi] = useState(AllProductsApi);

    const { data, error, isLoading } = useGetproductByNameQuery(productsApi);

  

  
   console.log(error)
   console.log(isLoading)


 

   const buttonData = [
    { Title: "All products", value: "left" , DataControl:AllProductsApi},
    { Title: "Men category", value: "center" , DataControl:menProductsApi},
    { Title: "Wommen category", value: "right",DataControl: womenProductsApi },
  ];
    
   


      return (
        <Container
          sx={{
            mt: 9,
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 3,
            }}
          >
            <Box>
              <Typography variant="h6" component="h6">
                Selected products
              </Typography>
              <Typography variant="body1" component="p">
                All our nem arrivals in a exclusive brand selection
              </Typography>
            </Box>
    
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={(e,value) => handleAlignment(value)}
              aria-label="text alignment"
              sx={{
                gap: 2,
              }}
            >


              {buttonData.map((item, index) => (
                <ToggleButton

                onClick={()=>ArrangingData(item.DataControl)}
                key={index}
                  sx={{
                    color: theme.palette.text.primary,
                  }}
                  className="myButton"
                  value={item.value}
                  aria-label="left aligned"
                >
                  {item.Title}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
    
    
          </Stack>
    
    
           <Stack
           
    
           direction="row"
            justifyContent={useMediaQuery('(min-width:600px)')?  "space-between" :  "center"}
           alignItems="center"
           sx={{
             mt: 5,
             pb:5,
             flexWrap: "wrap",
             gap: 1,
           }}
    
           >


  
      {

        data ?
       
        data.data.map((item , index) => (
    
          <Cardes key={index} item={item} handleClickOpen={handleClickOpen} /> 
          
       )) : null
     
      
        
       }

    
           
           
    
           <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            ".MuiPaper-root": {
              minWidth: { xs: "90%", md: "800px" },
              position: "relative",
            },
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "10px",
              right: "20px",
              "&:hover": {
                color: "red",
                rotate: "180deg",
                transition: " 0.3s ",
              },
            }}
          >
            <Close />
          </IconButton>
    
          <ProductDetails />
          
        </Dialog>
           
    
    
         
    
         </Stack>
    
        </Container>
      );
      
    }

  



export default Main;
