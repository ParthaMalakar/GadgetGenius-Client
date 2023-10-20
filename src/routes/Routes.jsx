
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import BrandDetails from "../pages/Home/BrandDetails";
import DetailsProduct from "../components/Product/DetailsProduct";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register"
import PrivateRoute from "./Privateroute";
import Mycart from "../pages/Mycart/Mycart";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element:<Home></Home> ,
          loader:()=> fetch('https://brand-shop-server-fmbxdyyfd-parthamalakar.vercel.app/brands')
        },
        {
            path: "/addProduct",
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute> ,
            
          },
          {
            path: "/brandDescription/:name",
            element:<BrandDetails></BrandDetails> ,
            loader:()=> fetch('https://brand-shop-server-fmbxdyyfd-parthamalakar.vercel.app/products')
            
          },
          {
            path: "/productDescription/:id",
            element:<PrivateRoute><DetailsProduct></DetailsProduct></PrivateRoute>,
            loader:({ params })=> fetch(`https://brand-shop-server-fmbxdyyfd-parthamalakar.vercel.app/products/${params.id}`)
            
          },
          {
            path: "/login",
            element:<Login></Login>,
            
          },
          {
            path: "/register",
            element:<Register></Register>,
            
          },
          {
            path: "/mycart",
            element:<PrivateRoute><Mycart></Mycart></PrivateRoute>,
            loader:()=> fetch('https://brand-shop-server-fmbxdyyfd-parthamalakar.vercel.app/products')
            
          },
          {
            path: "/update/:id",
            element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
            loader:({ params })=> fetch(`https://brand-shop-server-fmbxdyyfd-parthamalakar.vercel.app/products/${params.id}`)
            
          },
      ],
    },
  ]);
export default router;