// create ProtectedRoute component
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from "react-router-dom";
import { auth } from '../../config/firebase';
import Loader from '../Loader/Loader';

const ProtectedRoute = ({ children, loginOnly = true }) => {
  const [user, loading] = useAuthState(auth);
  
  if (loading) {
    return <Loader />;
  }

  if (!user && loginOnly) {
    return <Navigate to="/login" />;
  }

  if (user && !loginOnly) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectedRoute;