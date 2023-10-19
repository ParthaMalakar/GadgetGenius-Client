import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';
import MycartDetails from './MycartDetails'

const Mycart = () => {
    const products = useLoaderData();
    const { user } = useContext(AuthContext);
    const{email}=user;
    const[carts,setCarts]=useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => setCarts(data.MyCart))
    }, [])
    const productsById = {};
    products.forEach(product => {
    productsById[product._id] = product;
  });
  const matchedProducts = carts.map(id => productsById[id]);
    console.log(matchedProducts)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
            {matchedProducts.map(pro=><MycartDetails key={pro._id} pro={pro}></MycartDetails>)}
            
        </div>
    );
};

export default Mycart;