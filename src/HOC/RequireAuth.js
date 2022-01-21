import React from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

const RequireAuth = ({children}) => {
    const location = useLocation();
   const {user} = useAuth(); //если задать true, то пускает в users
   if (!user){
       return <Navigate to = {'/login'} state = {location} />
   }
    return children;
};

export default RequireAuth;