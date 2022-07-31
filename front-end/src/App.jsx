import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./css/style.scss";
import "flowbite";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/users/UserList";
import UserConfig from "./pages/users/UserConfig";
import BuatPengiriman from "./pages/pengiriman/BuatPengiriman";
import ListPengiriman from "./pages/pengiriman/ListPengiriman";
import BuatBerita from "./pages/berita/BuatBerita";
import ListBerita from "./pages/berita/ListBerita";
import MasterCustomer from "./pages/utillity/MasterCustomer";
import MasterKendaraan from "./pages/utillity/MasterKendaraan";
import MasterTeli from "./pages/utillity/MasterTeli";
import MasterPengangkutan from "./pages/utillity/MasterPengangkutan";
import Summary from "./pages/utillity/Summary";
import LoginForm from "./pages/login/LoginForm";
import DetailPengiriman from "./pages/pengiriman/DetailPengiriman";
import { useSelector } from "react-redux";
import TeliProfile from "./pages/utillity/TeliProfile";

function PrivateRoute({ children }) {
  const location = useLocation();
  const { isLogin, user } = useSelector((state) => state.authReducer);

  if (!isLogin && !user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/userlist"
          element={
            <PrivateRoute>
              <UserList />
            </PrivateRoute>
          }
        />
        <Route
          path="/userconfig"
          element={
            <PrivateRoute>
              <UserConfig />
            </PrivateRoute>
          }
        />
        <Route
          path="/buatpengiriman"
          element={
            <PrivateRoute>
              <BuatPengiriman />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/listpengiriman"
          element={
            <PrivateRoute>
              <ListPengiriman />
            </PrivateRoute>
          }
        />
        <Route
          path="/buatberita"
          element={
            <PrivateRoute>
              <BuatBerita />
            </PrivateRoute>
          }
        />
        <Route
          path="/listberita"
          element={
            <PrivateRoute>
              <ListBerita />
            </PrivateRoute>
          }
        />
        <Route
          path="/mastercustomer"
          element={
            <PrivateRoute>
              <MasterCustomer />
            </PrivateRoute>
          }
        />
        <Route
          path="/masterkendaraan"
          element={
            <PrivateRoute>
              <MasterKendaraan />
            </PrivateRoute>
          }
        />
        <Route
          path="/masterteli"
          element={
            <PrivateRoute>
              <MasterTeli />
            </PrivateRoute>
          }
        />
        <Route
          path="/masterpengangkutan"
          element={
            <PrivateRoute>
              <MasterPengangkutan />
            </PrivateRoute>
          }
        />
        <Route path="/summary" element={<Summary />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route
          path="listpengiriman/detailpengiriman/:id"
          element={
            <PrivateRoute>
              <DetailPengiriman />
            </PrivateRoute>
          }
        />
        <Route
          path="masterteli/teliprofile/:id"
          element={
            <PrivateRoute>
              <TeliProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
