import React from 'react';
import { Navigate } from 'react-router-dom';

export interface IRequireAuthProp {
  children: JSX.Element;
}

export default function RequireAuth({ children }: IRequireAuthProp) {
  const username = localStorage.getItem('username');

  if (username === null) {
    return <Navigate to="/sign-in" />;
  }

  return children;
}
