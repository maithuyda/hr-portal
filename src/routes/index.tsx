import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RequireAuth from './RequireAuth';
import { RouteConfig, RequireAuthRouteConfig } from './route-config';
import Layout from '../components/layout';
import LoadingFallBack from '../components/loading-fallback';
import SignIn from '../pages/signin';
const AppoinmentList = lazy(() => import('../pages/appointment-list'));
const AppointmentDetails = lazy(() => import('pages/appointment-details'));
const CandidateList = lazy(() => import('../pages/candidate-list'));
const CandidateDetails = lazy(() => import('../pages/candidate-details'));
const UserProfile = lazy(() => import('../pages/user-profile'));

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallBack />}>
        <Routes>
          <Route path={RouteConfig.signIn} element={<SignIn />} />
          <Route element={<Layout />}>
            <Route
              path={RouteConfig.initialRoute}
              element={<Navigate to={RequireAuthRouteConfig.appointmentList} replace />}
            />
            <Route
              path={RequireAuthRouteConfig.appointmentList}
              element={
                <RequireAuth>
                  <AppoinmentList />
                </RequireAuth>
              }
            />
            <Route
              path={RequireAuthRouteConfig.appointmentDetails}
              element={
                <RequireAuth>
                  <AppointmentDetails />
                </RequireAuth>
              }
            />
            <Route
              path={RequireAuthRouteConfig.candidateList}
              element={
                <RequireAuth>
                  <CandidateList />
                </RequireAuth>
              }
            />
            <Route
              path={RequireAuthRouteConfig.candidateDetails}
              element={
                <RequireAuth>
                  <CandidateDetails />
                </RequireAuth>
              }
            />
            <Route
              path={RequireAuthRouteConfig.userProfile}
              element={
                <RequireAuth>
                  <UserProfile />
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
