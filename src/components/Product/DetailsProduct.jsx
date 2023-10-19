import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/Authprovider";

const DetailsProduct = () => {
    const product = useLoaderData();
    const { user } = useContext(AuthContext);
    const {_id,image,name,brandName,type,price,shortDescription,rating} = product;
    const{email}=user;
    console.log(email)
    const[carts,setCarts]=useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => setCarts(data.MyCart))
    }, [])
    const handleAddcart = ()=>{
       
        console.log(carts)
        const cart =[...carts,_id]
        
        const Puser = {
            email,
            "MyCart" : cart

        }
        console.log(Puser)
        fetch('http://localhost:5000/user', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(Puser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
        Swal.fire(
            'Prodouct added success!',
            'You clicked the button!',
            'success'
          )
    }

    return (
        <div>
            <div className="card mx-auto   bg-base-100 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-80 w-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Product Name: {name}</h2>
                    <p>Brand Name:{brandName}</p>
                    <p>Product Type:{type}</p>
                    <p>Price:{price}</p>
                    <p className="w-80">Description: {shortDescription}</p>
                    <p>Rating:{rating}Out of 5</p>
                    <div className="card-actions ">
                        <button onClick={handleAddcart} className="btn btn-primary flex-grow">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsProduct;