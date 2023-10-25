import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductShow from "../ProductShow/ProductShow";
import Swal from "sweetalert2";


const ProductItem = () => {
const [products, setProducts]= useState([]);
const allData = useLoaderData();
const {data} = useParams();
const brandName = data;
// console.log(allData)
// console.log(brandName)

useEffect(()=>{
    const findDataCard = allData.filter(dataCard=>dataCard.brandName == brandName);
    setProducts(findDataCard);

},[])
  
 return (
        <div className="w-full lg:flex lg:justify-between px-8 py-20">
            <div className="grid lg:w-4/5 w-full lg:grid-cols-2 gap-4 md:grid-cols-2 grid-cols-1  ">
            {
                products.map(product => <ProductShow key={product.id} product={product}></ProductShow>)
            }
            </div>
            <div className="lg:w-1/5 md:w-2/4 md:mx-auto lg:pl-6 lg:space-y-4 space-y-10 lg:mt-0 mt-8">
                
               
                <div className="lg:w-52 border-b-2 lg:h-60 border-1.5 relative border-slate-100">
                    <img className="relative" src="https://i.ibb.co/H4K9ygt/people-2594683-1280-1.jpg" alt="" />
                    <h2 className="absolute px-4 pb-8">20% OFF for Puja Offer</h2>
                    
                </div>
                <div className="lg:w-52 border-b-2 lg:h-60 border-1.5 relative border-slate-100 ">
                    <img className="relative" src="https://i.ibb.co/H4K9ygt/people-2594683-1280-1.jpg" alt="" />
                    <h2 className="absolute px-4 pb-8">20% OFF for Puja Offer</h2>
                    
                </div>
                <div className="lg:w-52 border-b-2 lg:h-60 border-1.5 relative border-slate-100 ">
                    <img className="relative" src="https://i.ibb.co/H4K9ygt/people-2594683-1280-1.jpg" alt="" />
                    <h2 className="absolute px-4 pb-8">20% OFF for Puja Offer</h2>
                    
                </div>

            </div>
        </div>
    );
};

export default ProductItem;