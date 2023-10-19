import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';
import MycartDetails from './MycartDetails'
import Swal from 'sweetalert2';

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
  const brandProducts = matchedProducts.filter(pro => pro !== undefined);
//   const [coffees, setCoffees] = useState([]);
//   setCoffees(matchedProducts)
  console.log(brandProducts)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
            {brandProducts.map((pro,index)=><MycartDetails key={index} pro={pro} ></MycartDetails>)}
            
        </div>
    );
};

export default Mycart;