import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import ProductItem from "../components/ProductItem/ProductItem";


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
          element:<AddProduct></AddProduct>
        },
        {
          path:"/productItem",
          element:<ProductItem></ProductItem>,
          // loader:({params})=> fetch(`http://localhost:5000/product/${params.brandName}`)

        }
      ]
    },
  ]);
















  export default router;