import Swal from "sweetalert2";

const AddProduct = () => {
    const handleProduct = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.Image.value;
        const name = form.Name.value;
        const brandName = form.BrandName.value;
        const type = form.Type.value;
        const price = form.Price.value;
        const shortDescription = form.ShortDescription.value;
        const rating = form.Rating.value;
const newProduct ={image,name,brandName,type,price,shortDescription,rating}
event.target.reset();
console.log(newProduct)
fetch('https://brand-shop-server-fmbxdyyfd-parthamalakar.vercel.app/addProduct', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(newProduct)
})
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Product Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cancel'
              })
        }
    })
}
    
    return (
        <div>
            <div className="bg-[#E76F511A]">
                <h2 className="text-3xl my-7 pt-5 text-center font-bold">Please Give all information</h2>
                <form onSubmit={handleProduct} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Image</span>
                        </label>
                        <input type="text" required name="Image" placeholder="Image" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" required name="Name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Brand Name</span>
                        </label>
                        <input type="text" required name="BrandName" placeholder="Brand Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Type </span>
                        </label>
                        <input type="text" required name="Type" placeholder="Type" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="text" required name="Price" placeholder="Price" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Short description</span>
                        </label>
                        <input type="text" required name="ShortDescription" placeholder="Short description" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Rating</span>
                        </label>
                        <input type="text" required name="Rating" placeholder="Rating" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6 mb-9">
                        <button className="btn bg-red-400 text-white font-bold">ADD</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;