import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductShow from "../ProductShow/ProductShow";


const ProductItem = () => {
const [products, setProducts]= useState([]);
const {data} = useParams();
const brandName = data;
console.log(brandName)

useEffect(()=>{
    fetch(`http://localhost:5000/product/${brandName}`)
    .then(res => res.json())
    .then((data) => {
     setProducts(data)

    })
},[brandName])
 

    return (
        <div className="w-10/12 px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-2 grid-cols-1 w-4/5">
            {
                products.map(product => <ProductShow key={product.id} product={product}></ProductShow>)
            }
            </div>
        </div>
    );
};

export default ProductItem;