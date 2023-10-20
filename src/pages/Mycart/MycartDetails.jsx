import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MycartDetails = ({pro}) => {
    console.log(pro)
    const {_id,image,name,brandName,type,price,rating} = pro || {};
    const handleDelete =_id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
    
    
                fetch(`https://brand-shop-server-fmbxdyyfd-parthamalakar.vercel.app/products/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            window.location.reload(true)
                        }
                    })
    
            }
        })
    }
    return (
        <div>
            <div className="card mx-auto  md:h-[600px]  bg-base-100 shadow-2xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-80 w-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Product Name: {name}</h2>
                    <p>Brand Name:{brandName}</p>
                    <p>Product Type:{type}</p>
                    <p>Price:{price}</p>
                    <p>Rating:{rating}Out of 5</p>
                    <div className="card-actions w-full">
                        <button onClick={()=>handleDelete(_id)} className="btn btn-primary  flex-grow">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MycartDetails;