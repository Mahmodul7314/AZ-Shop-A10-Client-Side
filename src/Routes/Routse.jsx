import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import ProductItem from "../components/ProductItem/ProductItem";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import SingleDetail from "../components/singleDetail/SingleDetail";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import MyCartSingle from "../components/MyCartSingle/MyCartSingle";






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
            element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
            path:"/mycart",
            element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
            loader:()=> fetch("https://az-shop-server-of4yu1nn6-mahmudul-hasans-projects-831adccd.vercel.app/cartproduct")
        },
        {
          path:"mycartsigle",
          element:<MyCartSingle></MyCartSingle>

        },
        {
          path:"/addProduct",
          element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path:"/productItem/:data",
          element:<ProductItem></ProductItem>,
          loader:()=> fetch("https://az-shop-server-of4yu1nn6-mahmudul-hasans-projects-831adccd.vercel.app/product")
   
          },
          {
            path:"/detail/:id",
            element:<PrivateRoute><SingleDetail></SingleDetail></PrivateRoute>,
            loader:()=> fetch("https://az-shop-server-of4yu1nn6-mahmudul-hasans-projects-831adccd.vercel.app/product")
          },
      
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/update/:id",
          element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
          loader:({params})=> fetch(`https://az-shop-server-of4yu1nn6-mahmudul-hasans-projects-831adccd.vercel.app/product/${params.id}`)
        }
      ]
    },
  ]);
















  export default router;