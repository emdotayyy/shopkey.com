import { useEffect, useState } from "react";
import classes from "./AvailableProducts.module.css";
import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";


const AvailableProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(()=> {
    const fetchProducts = async () => {
      const response = await fetch('https://shopkeydotcom-default-rtdb.firebaseio.com/products.json');
      
      if (!response.ok){
        throw new Error('Something went wrong!');
      }
      
      const responseData = await response.json();

      const loadedProducts = [];

      for (const key in responseData){
        loadedProducts.push({
          id: key,
          name: responseData[key].name,
          shortDescription: responseData[key].shortDescription,
          price: responseData[key].price
        });
      }

      setProducts(loadedProducts);
      setIsLoading(false);
    };

    fetchProducts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

  }, []);

  if (isLoading) {
    return <section className={classes.productsLoading}><p>Loading...</p></section>
  };

  if (httpError) {
    return <section className={classes.productsError}><p>{httpError}</p></section>
  }

  const prodList = products.map((prod)=><ProductItem key={prod.id} id={prod.id} name={prod.name} shortDescription={prod.shortDescription} price={prod.price} />);
  
  return (
    <section className={classes.products}>
      <Card>
        <ul>
          {prodList}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;