import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getHomeData();
  }, []);

  return (
    <>
      {/* Header */}
      <Header cart={cart} />

      {/* Home Page */}
      <main className="mt-15">
        <ProductsGrid products={products} />
      </main>
    </>
  );
}

