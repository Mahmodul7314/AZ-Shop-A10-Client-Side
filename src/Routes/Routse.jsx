import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import ProductItem from "../components/ProductItem/ProductItem";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=> fetch('/data.json')
        },
        {
            path:"/addproduct",
            element:<AddProduct></AddProduct>
        },
        {
            path:"/mycart",
            element:<MyCart></MyCart>
        },
        {
          path:"/addProduct",
          element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path:"/productItem/:data",
          element:<ProductItem></ProductItem>,
   

        },
        {
          path:"/productDetail",
          element: <ProductDetail></ProductDetail>,
          // loader:()=> fetch(' https://az-shop-server-vf03j6kwo-mahmudul-hasans-projects-831adccd.vercel.app/product')
       
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);
















  export default router;