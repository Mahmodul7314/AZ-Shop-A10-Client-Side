import { data } from "autoprefixer";
import {BsCurrencyDollar} from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const ProductShow = ({product}) => {
    const {_id,name, brandName, price, shortDescription, rating, photo, fullDescription}= product

    return (
        <div className="lg:h-[90vh] h-full" >
            <div className="card h-full lg:h-[32rem] lg:w-[26rem] gap-8 bg-blue-200 pt-10 shadow-xl">
            <figure><img className="w-64 h-60 p-6" src={photo} alt="product" /></figure>
            <div className="card-body text-center">
            <div className="text-4xl font bold lg:justify-center justify-start lg:pl-0 pl-4 flex"> <h2 className="card-title text-center g mx-aut font-bold text-lg">{brandName}</h2></div>
                <div className="lg:flex lg:justify-center">
                <div className="lg:flex lg:justify-center px-4 ">
                    <h2 className="card-title">{name}</h2>
                  </div>
                  </div>
                  <div className="flex justify-between px-4 text-sm font-normal">
                <p className="flex justify-center items-center text-lg font-bold">{price}<span className="gap-4"><BsCurrencyDollar></BsCurrencyDollar></span></p>
                <p>

                <div class="flex items-center">
    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{rating} out of 5</p>
</div>

</p>
               
          </div>
                <p className="text-sm font-normal">{shortDescription}</p>
                <div className="lg:flex lg:gap-1 gap-6 lg:justify-around lg:space-x-0 space-x-10 mt-3 ">
                <Link to={`/detail/${_id}`} className=" bg-blue-500 text-white lg:w-24 lg:px-0 px-2 rounded-lg h-10 py-2 hover:bg-slate-200 hover:text-black">Details</Link>
                <Link to={`/update/${_id}`} className=" bg-pink-500 text-white lg:w-24  rounded-lg h-10 py-2 lg:px-0 px-2 hover:bg-slate-200 hover:text-black">Update</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProductShow;