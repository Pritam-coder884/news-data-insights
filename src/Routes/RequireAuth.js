import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import {useLocation,Navigate,Outlet} from 'react-router-dom'
//import {useSelector} from 'react-redux'



function RequireAuth() {
  let { isLogin } = useSelector((state) => state?.loginUser);
  const location = useLocation();

  return isLogin || localStorage.getItem("token") ? (
    <Outlet />
  ) : (
    <Navigate to={`/login`} state={{ from: location }} replace />
  );
}

export default RequireAuth