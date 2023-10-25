import React, { useState } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCartSingle = ({mycartproduct, mycartData,setmycartData}) => {

  const {_id,name,brandName,price,shortDescription,rating,fullDescription,photo}= mycartproduct;

  const handleDelete =_id =>{
    console.log(_id) 
    Swal.fire({
     title: 'Are you sure?',
     text: "You won't be able to revert this!",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes, delete it!'
   }).then((result) => {
     if (result.isConfirmed) {
       
    
    fetch(`http://localhost:5000/cartproduct/${_id}`,{
     method:'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
     console.log(data);
     if(data.deletedCount > 0){
         Swal.fire(
             'Deleted!',
             'Your Product has been deleted.',
             'success'
             )
             const remaining =mycartData.filter(product=> product._id !== _id);
            setmycartData(remaining);
         }
      })

     }
   })
 }
    return (
        <div className="md:py-8 lg:py-2 py-8" >
            <div className="card h-full md:h-full lg:h-[37rem] md:flex md:mx-auto md:w-[30rem] md:py-10 md:h-[30rem] lg:w-[24rem] gap-8 bg-blue-200 pt-10 lg:px-10 shadow-xl">
            <figure><img className="w-70 h-64 p-6" src={photo} alt="product" /></figure>
            <div className="card-body text-center">
            <div className="text-4xl font bold lg:justify-center md:justify-center justify-start lg:pl-0 pl-4 flex"> <h2 className="card-title text-center g mx-aut font-bold text-lg">{brandName}</h2></div>
                <div className="lg:flex lg:justify-center">
                <div className="lg:flex lg:justify-center md:flex md:justify-center px-4 ">
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
           <div className="lg:flex lg:gap-1 gap-6 lg:justify-around lg:space-x-0 space-x-10 lg:mt-3 mt-0 ">
            </div>
            </div>
            <div className='flex justify-center'>
            <button onClick={()=>handleDelete(_id)} className=" btn btn-error lg:mb-0 md:mb-0 mb-8  hover:bg-slate-200 hover:text-black">Delete</button>
            </div>
            </div>
        </div>
    );
};

export default MyCartSingle;