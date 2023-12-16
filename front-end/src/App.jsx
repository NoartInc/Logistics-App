import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import loadable, { lazy } from "@loadable/component";
import "./css/style.scss";

import "./charts/ChartjsConfig";
import Layout from "./components/Layout";

// Import pages with codesplitting by loadable
const Dashboard = lazy(() => import("./pages/Dashboard"));
const UserList = lazy(() => import("./pages/users/UserList"));
const UserConfig = lazy(() => import("./pages/users/UserConfig"));
const BuatPengiriman = lazy(() => import("./pages/pengiriman/BuatPengiriman"));
const ListPengiriman = lazy(() => import("./pages/pengiriman/ListPengiriman"));
const BuatBerita = lazy(() => import("./pages/berita/BuatBerita"));
const ListBerita = lazy(() => import("./pages/berita/ListBerita"));
const MasterCustomer = lazy(() => import("./pages/utillity/MasterCustomer"));
const MasterKendaraan = lazy(() => import("./pages/utillity/MasterKendaraan"));
const MasterTeli = lazy(() => import("./pages/utillity/MasterTeli"));
const MasterProduksi = lazy(() => import("./pages/utillity/MasterProduksi"));
const MasterPengangkutan = lazy(() =>
  import("./pages/utillity/MasterPengangkutan")
);
const MasterGrading = lazy(() => import("./pages/grading/MasterGrading"));
const Summary = lazy(() => import("./pages/utillity/Summary"));
const LoginForm = loadable(() => import("./pages/login/LoginForm"));
const DetailPengiriman = lazy(() =>
  import("./pages/pengiriman/DetailPengiriman")
);
const TeliProfile = lazy(() => import("./pages/utillity/TeliProfile"));

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
        <Route exact path="/login" element={<LoginForm />} />
        <Route path="/" element={<Layout />}>
          <Route path="" index element={<Dashboard />} />
          <Route path="userlist" element={<UserList />} />
          <Route path="userconfig" element={<UserConfig />} />
          <Route path="buatpengiriman" element={<BuatPengiriman />} />
          <Route path="listpengiriman" element={<ListPengiriman />} />
          <Route path="buatberita" element={<BuatBerita />} />
          <Route path="listberita" element={<ListBerita />} />
          <Route path="mastercustomer" element={<MasterCustomer />} />
          <Route path="masterkendaraan" element={<MasterKendaraan />} />
          <Route path="masterteli" element={<MasterTeli />} />
          <Route path="masterproduksi" element={<MasterProduksi />} />
          <Route path="masterpengangkutan" element={<MasterPengangkutan />} />
          <Route path="summary" element={<Summary />} />
          <Route path="master-grading" element={<MasterGrading />} />
          <Route
            path="listpengiriman/detailpengiriman/:id"
            element={<DetailPengiriman />}
          />
          <Route path="masterteli/teliprofile/:id" element={<TeliProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
