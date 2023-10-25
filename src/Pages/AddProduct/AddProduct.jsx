/* eslint-disable no-unused-vars */

import BrandCard from './../../components/BrandCard/BrandCard';
import Swal from 'sweetalert2'
const AddProduct = () => {

    const handleAddProduct =e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const fullDescription = form.fullDescription.value;
        const photo = form.photo.value;


        const product = {name,brandName,price,shortDescription,rating,fullDescription,photo}
        console.log(product)

        fetch(' https://az-shop-server-of4yu1nn6-mahmudul-hasans-projects-831adccd.vercel.app/product',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
           if(data.insertedId){
            Swal.fire({
                title: 'Sucess!',
                text: 'Product Added Successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
           }
        })
        



    }


    return (
        <div className="lg:my-20 my-6 lg:px-8 px-2">
             <form onSubmit={handleAddProduct}>
                {/* form name and brand row */}
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <label className="input-group">
                    <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" required />
                </label>
            </div>
         
                <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Brand Name</span>
                </label>
                <label className="input-group">
                    <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" required/>
                </label>
            </div>
         
               
                </div>
                {/* form price and short description row */}
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <label className="input-group">
                    <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" required />
                </label>
            </div>
         
                <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Short Description</span>
                </label>
                <label className="input-group">
                    <input type="text" name="shortDescription" placeholder="Short Description" className="input input-bordered w-full" required />
                </label>
            </div>
         
               
                </div>
                {/* form Rating and full-description row */}
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                <label className="label">
                    <span className="label-text">Rating</span>
                </label>
                <label className="input-group">
                    <input type="number" name="rating" placeholder="Rating" className="input input-bordered w-full" required />
                </label>
            </div>
         
                <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                    <span className="label-text">Full Description</span>
                </label>
                <label className="input-group">
                    <input type="text" name="fullDescription" placeholder="Product details" className="input input-bordered w-full" required />
                </label>
            </div>
         
               
                </div>
                {/* form photo URL row */}
             <div className="mb-8">
                <div className="form-control w-full">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <label className="input-group">
                    <input type="text" name="photo" placeholder="phot URl" className="input input-bordered w-full" required />
                </label>
             </div>
         </div>

         <input type="submit" value="Add Product" className="btn bg-blue-500 text-white btn-block" />
            </form>
         

        </div>
    );
};

export default AddProduct;