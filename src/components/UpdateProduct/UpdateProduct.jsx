import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
const allData = useLoaderData();
const {_id,name,brandName,price,shortDescription,rating,fullDescription,photo} = allData;

const handleUpdate =event=>{
 event.preventDefault ();
 const form = event.target;
 const name = form.name.value;
 const brandName = form.brandName.value;
 const price = form.price.value;
 const shortDescription = form.shortDescription.value;
 const rating = form.rating.value;
 const fullDescription = form.fullDescription.value;
 const photo = form.photo.value;

const updateProduct = {name,brandName,price,shortDescription,rating,fullDescription,photo}
 console.log(updateProduct)

      // data to the server
      fetch(`http://localhost:5000/product/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updateProduct )
       })
       .then(res=> res.json())
        .then(data => {
           if(data.modifiedCount> 0){
            Swal.fire({
                title: 'Sucess!',
                text: 'Product Updated Successfully',
                icon: 'success',
                confirmButtonText:"Ok"
              })
           }
        })

}


    return (
        <div className="py-20 pb-10 px-20">
            <h2 className="text-center py-8 text-bold text-2xl">Update Product</h2>
             <form onSubmit={handleUpdate} >
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

         <input type="submit" value="Add Product" className="btn bg-red-500 text-white btn-block" />
            </form>
         
            
        </div>
    );
};

export default UpdateProduct;