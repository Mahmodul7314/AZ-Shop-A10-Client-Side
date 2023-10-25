import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import { getAuth } from 'firebase/auth';
import Swal from 'sweetalert2'

const Register = () => {

    const {createUser} =useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate =useNavigate();
    const handleRegister= e=> {
        e.preventDefault()
        const form =new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo');
        const email = form.get('email');
        const password =form.get("password");
        // console.log(name,photo,email,password)


         //conditional password setup
      if(password.length<6){
        setErrorMessage("password will be at least 6 character")
        return;
      }else if(!/[A-Z]/.test(password)){
        setErrorMessage('Password must be have one Capital Letter')
        return;
      }else if (!/[#_]/.test(password)){
        setErrorMessage('Password must be have #_')
        return;
      }
         createUser(email,password)
         .then(result=>{
            Swal.fire(
                'Thanks!',
                'Your Registraion is successful!',
                navigate('/')
              
              )
              e.target.reset();
         })
         .then(error =>{
            console.error(error)
         })

      }



    return (
    <div className="hero my-10 min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center my-4">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card pb-6 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="photo" placeholder="photo Url" className="input input-bordered" required />
          <label className="label">

          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
        <p className="text-red-500  font-bold text-lg px-4 py4">{errorMessage}</p>
      <p className="text-center mb-8">Already Have an Account? Please <Link className="text-blue-600 font-bold" to={"/login"}>Login</Link></p>
    </div>
  </div>
</div>
    );
};

export default Register;