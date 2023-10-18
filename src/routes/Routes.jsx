
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element:<Home></Home> ,
          loader:()=> fetch('http://localhost:5000/brands')
        },
        {
            path: "/addProduct",
            element:<AddProduct></AddProduct> ,
            
          },
      ],
    },
  ]);
export default router;