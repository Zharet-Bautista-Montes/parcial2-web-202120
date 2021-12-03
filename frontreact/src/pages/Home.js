import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Card } from '../components/Card';
import { getProductsService } from '../services/product';

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dataProducts = getProductsService(searchKey);
    setProducts(dataProducts); 
    products.forEach((p) => {
      <Card name={p.name} price={p.price} picture={p.picture} isActive={p.isActive}></Card>
    })
  }, [searchKey, products]);

  return (
    <section id='home'>
      <div className='home-container'>
        <h1><FormattedMessage id='gallery'/></h1>
        <div className='home-card'>
          <p>Show here product cards</p>
        </div>
      </div>
    </section>
  );
};
