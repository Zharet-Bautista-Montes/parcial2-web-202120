import React, { useState, useEffect } from 'react';
import { Chart } from '../components/Chart';
import { getProductsService } from '../services/product';

export const Report = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dataProducts = getProductsService('');
    setProducts(dataProducts);
    <Chart data={products}></Chart>
  }, [products]);

  return (
    <section id='report'>
      <div className='report-container'>
        <h1>Unidades en inventario</h1>
        <p>Show here the graph</p>
      </div>
    </section>
  );
};
