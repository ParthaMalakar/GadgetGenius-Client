
const Product = ({product}) => {
    const {image,name,brandName,type,price,rating} = product;
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
                    <div className="card-actions ">
                        <button className="btn btn-primary flex-grow">Deatils</button>
                        <button className="btn btn-primary flex-grow">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;