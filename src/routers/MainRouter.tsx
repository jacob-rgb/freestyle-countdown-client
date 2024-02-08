import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Fallback from "../components/commons/Fallback";
import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const LandingPage = React.lazy(() => import("../pages/Landing"));
const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));
const User = React.lazy(() => import("../pages/User"));
const CounterPage = React.lazy(() => import("../pages/CounterPage"));
const ProductDetail = React.lazy(() => import("../pages/ProductDetail"));

export default function MainRouter() {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  return (
    <Routes>
      <Route
        index
        element={
          <React.Suspense fallback={<Fallback />}>
            <LandingPage />
          </React.Suspense>
        }
      />

      <Route
        path="/login"
        element={
          <React.Suspense fallback={<Fallback />}>
            <Login />
          </React.Suspense>
        }
      />

      <Route
        path="/register"
        element={
          <React.Suspense fallback={<Fallback />}>
            <Register />
          </React.Suspense>
        }
      />

      <Route
        path="/user"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <React.Suspense fallback={<Fallback />}>
              <User />
            </React.Suspense>
          </PrivateRoute>
        }
      />

      <Route
        path="/count"
      >
        <Route 
          path=""
          element={
            <React.Suspense fallback={<Fallback />}>
              <CounterPage />
            </React.Suspense>
          }
        />
        <Route
          path=":productId"
          element={
            <React.Suspense fallback={<Fallback />}>
              <ProductDetail />
            </React.Suspense>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
