  
import React, { useState,useEffect } from 'react';

export default function Products({ setCart, cart }) {
  const [products, setProducts] = useState([]);

      const apiKey = "362eba70-104a-4a06-b579-d355dcf94ea1";
      const [data, setData] = useState("");
    
      useEffect(() =>{
        GetCat()
      }, [])
      
      const GetCat = () => {
        console.log ("Run")
          fetch("https://api.thecatapi.com/v1/images/search?limit=10",{
              headers: {
                  'x-api-key': apiKey
              }
          })
          .then((res) => res.json())
          .then((cats) => {
            for (let i = 0; i < cats.length; i++) {
              const cat = cats[i];
              cat.price = 100
              cat.name = "Tyler"
            }
            setProducts(cats);
            console.log(cats)
          })
          .catch((error) =>{
            console.log('Error: ',error)
          })
        
        }

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <div className="product.Name">{product.name}</div>
            <div className="product.Price">£{product.price}</div>
            <img className="CatPic" src={product.url} alt={product.name} />
            <div className="addToCart">
            <button className="button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}