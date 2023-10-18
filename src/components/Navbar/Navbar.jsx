import { NavLink } from "react-router-dom";
import logo from '../../../src/assets/logo.png';


const Navbar = () => {

    const navLinks = <>
        <li><NavLink className="text-lg" to="/">Home</NavLink></li>

        <li><NavLink className="text-lg" to="/addProduct">Add Product</NavLink></li>
        <li><NavLink className="text-lg" to="/about">My Cart</NavLink></li>

    </>



return (
    <div>
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                <img className="h-[30px] w-[80px] ml-20 md:ml-0 " src={logo} alt="" />
                <a className="btn btn-ghost normal-case text-base md:text-3xl pl-4 navbar-start">GadgetGenius</a>

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                
        <NavLink to="/login" className="btn md:btn-wide btn-accent text-white text-lg">Login</NavLink> 

            </div>

        </div>
    </div>
);
};
export default Navbar;