import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function PrivateRoute({children}){
  const isAuth = useSelector((storedata)=>{
    return storedata.auth ;
  })
    if(isAuth){
        return children;
    }
    else{
        alert("Please Login to access!");
        return <Navigate to="/login" />
    }
     
    
}