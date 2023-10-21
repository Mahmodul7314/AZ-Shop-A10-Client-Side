
import { Children, useContext } from 'react';
import { AuthContext } from '../../firebase/AuthProvider';
import { Navigate } from 'react-router-dom';





const PrivateRoute =({Children}) => {
    
const {user,loading} = useContext(AuthContext)
  
if(loading){
    return <div><span className="loading loading-spinner loading-lg"></span></div>
}

if(user){
    return <children></children>
}
 return <Navigate to={"/login"}></Navigate>

};

export default PrivateRoute;

PrivateRoute.propTypes={
    children:PropTypes.node
}