import { useState } from "react";
import { useEffect } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const SingleDetail = () => {
    const [data, setData] = useState({})
    const {id} = useParams();
    const allData = useLoaderData();
    // console.log(id)
    // console.log(allData)

    useEffect(()=>{
        const findData = allData.find(data=> data._id == id)
        setData(findData)

    } ,[])
    const {name,brandName, price, shortDescription, rating, photo, fullDescription}= data;
    // console.log(data)




// ------------------------Add To Cart functionality-----------------------

    const handleAddtoCart =_id=>{
    // console.log(_id);
       const data ={name,brandName,price,shortDescription,rating,photo,fullDescription};
       console.log(data)
    Swal.fire({
        title: 'Are you sure Add to Cart Product?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Add to This!'
      })
      .then((result) => {
        if (result.isConfirmed) {
        fetch("https://az-shop-server-of4yu1nn6-mahmudul-hasans-projects-831adccd.vercel.app/cartproduct",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data.result);
           if(data.insertedId){
            Swal.fire(
                'Addded!',
                'Added successfully.',
                'success'
                )
              
            }
         })

        }
      })
}
     return (
        <div style={{backgroundColor:" rgb(255 260 235)"}} className="" >
            <div className="card w-full h-full gap-8 bg-blend-luminosity pt-10 shadow-xl">
            <figure><img className="lg:w-96 md:w-60 l md:h-60 g:h-full p-6" src={photo} alt="product" /></figure>
            <div className="card-body text-center lg:px-20">
            <div className="text-4xl font bold lg:justify-center md:justify-center justify-start lg:pl-0 pl-4 flex"> <h2 className="card-title text-center g mx-aut font-bold text-xl">{brandName}</h2></div>
                <div className="lg:flex lg:justify-center mt-2 mb-4">
                <div className="lg:flex md:flex lg:justify-center md:justify-center px-4 ">
                    <h2 className="card-title text-xl font-bold">{name}</h2>
                  </div>
                  </div>
                  <div className="flex justify-around px-4 text-sm font-normal">
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
                <p className="text-lg leading-relaxed font-medium px-10">{fullDescription}</p>
                <div className="lg:flex lg:gap-1 gap-6 lg:justify-around lg:space-x-0 space-x-10 mt-3 ">
                <button onClick={handleAddtoCart} className=" bg-red-500 text-white lg:w-28 lg:px-0 px-2 rounded-lg h-10 py-2 hover:bg-blue-300 hover:text-black">Add To CART</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SingleDetail;