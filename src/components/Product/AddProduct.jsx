import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';

const AddProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    picture: '',
    type: '',
  });

  const handleInp = (e) => {
    if (e.target.name === 'price') {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <Box sx={{ width: '60vw', margin: '10vh auto' }}>
      <TextField
        sx={{margin: '1vh 0'}}
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        onChange={handleInp}
      />
      <TextField
        sx={{margin: '1vh 0'}}
        fullWidth
        id="outlined-basic"
        label="Description"
        variant="outlined"
        name="description"
        onChange={handleInp}
      />
      <TextField
        sx={{margin: '1vh 0'}}
        fullWidth
        id="outlined-basic"
        label="Price"
        variant="outlined"
        name="price"
        onChange={handleInp}
      />
      <TextField
        sx={{margin: '1vh 0'}}
        fullWidth
        id="outlined-basic"
        label="Picture"
        variant="outlined"
        name="picture"
        onChange={handleInp}
      />
      <TextField
        sx={{margin: '1vh 0'}}
        fullWidth
        id="outlined-basic"
        label="Type"
        variant="outlined"
        name="type"
        onChange={handleInp}
      />
      <Button
        sx={{margin: '1vh 0'}}
        variant="outlined"
        fullWidth
        size="large"
        onClick={() => {
          addProduct(product);
          navigate('/products');
        }}
      >
        CREATE PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;