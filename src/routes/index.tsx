import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from '../pages/signin';
import AppoinmentList from '../pages/appointment-list';
import CandidateList from '../pages/candidate-list';
import CandidateDetails from '../pages/candidate-details';
import Layout from '../components/layout';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { Navigate } from 'react-router-dom';

const AppRoute = () => {
  function RequireAuth({ children }: { children: JSX.Element }) {
    const { username } = useSelector((store: RootState) => store.portalReducer);

    if (username === '') {
      return <Navigate to="/sign-in" />;
    }
    return children;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <RequireAuth>
                <AppoinmentList />
              </RequireAuth>
            }
          />
          <Route
            path="candidate-list"
            element={
              <RequireAuth>
                <CandidateList />
              </RequireAuth>
            }
          />
          <Route
            path="candidate-details"
            element={
              <RequireAuth>
                <CandidateDetails />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
