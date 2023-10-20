/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";

const BrandCard = ({brandData}) => {
   const {id,brandName,imageurl} = brandData;

    return (
        <Link to={`/productItem/${brandName}`}  className="mt-12">
         <div className="card w-full bg-blue-200 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={imageurl} alt="brand_image" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                 <h2 className="card-title">{brandName}</h2>
            </div>
            </div>
                     
            </Link>
        );
};

export default BrandCard;