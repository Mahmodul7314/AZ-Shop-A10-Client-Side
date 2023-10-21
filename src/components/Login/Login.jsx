import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from './../../firebase/AuthProvider';
import { signInWithPopup } from "firebase/auth";


const Login = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const {signinwithGoogle} = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    // Reset input value
    e.target.reset();

    // Sign In with email and password
    signIn(email, password)
      .then(result => {
        Swal.fire(
          'Thanks!',
          'Your login is successful!',
          'success'
        )
        navigate('/home')
        e.target.reset();
      })
      .catch(error => {
        setErrorMessage(error.message); 
      });
  };

    //signinWith Google
    const handleGoogleSignIn=()=>{
        signinwithGoogle()
        .then(result=>{
            Swal.fire(
                'Good job!',
                'You Sign In with google!',
                'Ok'
              )
          navigate('/')
          e.target.reset();
        
        })
        .catch(error=>{
            setErrorMessage(error.message)
        } )
      }
   
  return (
    <div className="py-10">
      <div className="card pb-6 flex-shrink-0 lg: lg:px-8 w-1/4 mx-auto shadow-2xl bg-base-100">
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
            <button className="btn btn-primary">Log In</button>
          </div>
        </form>
        {errorMessage && (
          <p className="text-red-500 font-bold text-lg px-4 py-4">{errorMessage}</p>
        )}
        <p className="text-center py-8">
          Haven't Account? Please <Link className="text-blue-500 font-bold" to="/register">Register</Link>
        </p>
         <p className="text-lg font-medium text-center">Sign in with <span onClick={handleGoogleSignIn} className=" font-medium text-blue-600">Google</span></p>
      </div>
    </div>
  );
};

export default Login;
