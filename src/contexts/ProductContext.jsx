import React, { createContext, useState, useEffect} from 'react'


// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // Product State
  const [products, setproducts] = useState([])
  // fetch products
  useEffect(() => {
    const fetchProducts = async ()=>{
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setproducts(data);
    };
    fetchProducts();
  }, []);
  

  return (
    <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
  )
}

export default ProductProvider
