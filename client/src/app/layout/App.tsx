import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../models/products";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  function addProduct() {
    setProducts(prevState => [...prevState, 
      {
        id: prevState.length + 101,
        name: 'product' + (prevState.length + 1), 
        price: (prevState.length * 100) + 100,
        brand: 'some brand',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/200'
    }])
  }

  return (
    <>
      <Typography variant='h1'>Store</Typography>
      <Catalog products={products} addProduct={addProduct} />
    </>
  );
}

export default App;
