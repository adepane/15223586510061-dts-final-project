// create ProtectedRoute component
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from "react-router-dom";
import { auth } from '../../config/firebase';
import Loader from '../Loader/Loader';

const ProtectedRoute = ({ children, loginOnly = true }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  
  if (loading) {
    return <Loader />;
  }

  if (!user && loginOnly) {
    return <Navigate to={"/login"} state={location.state}/>;
  }

  if (user && !loginOnly) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectedRoute;