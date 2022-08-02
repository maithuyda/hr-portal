import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { Navigate } from 'react-router-dom';
import LoadingFallBack from '../components/loading-fallback';
import SignIn from '../pages/signin';
const AppoinmentList = lazy(() => import('../pages/appointment-list'));
const CandidateList = lazy(() => import('../pages/candidate-list'));
const CandidateDetails = lazy(() => import('../pages/candidate-details'));
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
      <Suspense fallback={<LoadingFallBack />}>
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
              path="candidate-details/:candidate_id"
              element={
                <RequireAuth>
                  <CandidateDetails />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoute;
