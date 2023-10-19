import { Link } from "react-router-dom";


const Registration = () => {
    
    return (
        <div>
             <div className="bg-[#E76F511A]">
                <h2 className="text-3xl my-7 pt-5 text-center font-bold">Please Register</h2>
                <form  className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-red-400 text-white font-bold">Register</button>
                    </div>
                </form>
                
                <p className="text-center mt-4 font-bold text-lg pb-6 mb-7 ">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
            </div>
            
        </div>
    );
};

export default Registration;