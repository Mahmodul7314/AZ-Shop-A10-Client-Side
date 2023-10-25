
import {children ,useContext } from 'react';
import { AuthContext } from '../../firebase/AuthProvider';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute =({children}) => {
    
const {user,loading} = useContext(AuthContext)
  
if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
}
console.log(user)

if(user){
    return children;
}
 return <Navigate to="/login"></Navigate>

}

export default PrivateRoute;

PrivateRoute.propTypes={
    children:PropTypes.node
}