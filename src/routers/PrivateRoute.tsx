// import React from "react";
import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ isAuthenticated = false, children }: { children: ReactElement, isAuthenticated?: boolean}) {

  if(!isAuthenticated) return < Navigate to='/' replace />

  return children;
}
