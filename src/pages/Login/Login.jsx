import { Link, useLocation, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../provider/Authprovider";



const Login = () => {
    const { signInWithGoogle, signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    console.log('location i n the login page', location)
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                if(result.user){
                    Swal.fire(
                        'Login success!',
                        'You clicked the button!',
                        'success'
                      )
                }
               
                
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                if(error){
                    Swal.fire({
                        title: 'Error!',
                        text: 'Do you want to continue',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                      })
                }
               
            })

    }
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        
    }
    return (
        <div>


            <div className="pt-8 bg-[#009CDB26]">
                <h2 className="text-3xl my-10 text-center pt-10 font-bold">Please Login</h2>
                <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-red-400 text-white">Login</button>
                    </div>
                </form>
              
                <p className="text-center mt-4 mb-4  text-lg font-bold">Do not have an account <Link to="/register" className="text-blue-600 font-bold" >Register</Link></p>
                <hr className="text-black w-[300px] mx-auto border-t-3 border-orange-500"></hr>
                <p className="text-center font-bold pb-3 ">Or</p>
                <div className="justify-center items-center text-center pb-7 mb-9">
                    <button onClick={handleSignInWithGoogle} className=" text-black btn btn-secondary bg-[#FFF]"> <FcGoogle className="text-2xl"></FcGoogle> Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;