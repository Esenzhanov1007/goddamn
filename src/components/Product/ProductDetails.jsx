import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../contexts/CartContextProvider';
import { useProducts } from '../../contexts/ProductContextProvider';

const ProductDetails = () => {

  const {id} = useParams();

  const {addProductToCart} = useCart();

  const {getProductDetails, productDetails} = useProducts();

  useEffect(() => {
    getProductDetails(id)
  }, [])

  return (
    <>
      <Grid container spacing={8} sx={{marginTop: '1vh', display: 'flex', justifyContent: 'center'}}>
        <Grid item xs={12} md={5}><img src={productDetails.picture} alt={productDetails.name} style={{width: '100%'}}/></Grid>
        <Grid item xs={12} md={5} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '10vh'}}>
          <Typography variant='h4' sx={{marginBottom: '1rem'}}>
            {productDetails.name}
          </Typography>
          <Typography sx={{marginBottom: '1rem'}}>
            Type: <b style={{color: 'green'}}>{productDetails.type}</b>
          </Typography>
          <Typography sx={{marginBottom: '1rem'}}>
            {productDetails.description}
          </Typography>
          <Typography variant='h6' sx={{marginBottom: '1rem', color: '#83B73B'}}>
            ${productDetails.price}
          </Typography>
          <Button variant='contained' color='success' sx={{fontSize: '0.7rem', padding: '14px 44px', width: '12vw',}} onClick={() => addProductToCart(productDetails)}>Add to cart</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductDetails;