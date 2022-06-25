import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import UserList from './pages/users/UserList';
import UserConfig from './pages/users/UserConfig';
import BuatPengiriman from './pages/pengiriman/BuatPengiriman';
import ListPengiriman from './pages/pengiriman/ListPengiriman';
import BuatBerita from './pages/berita/BuatBerita';
import ListBerita from './pages/berita/ListBerita';
import MasterCustomer from './pages/utillity/MasterCustomer';
import MasterKendaraan from './pages/utillity/MasterKendaraan';
import MasterTeli from './pages/utillity/MasterTeli';
import MasterPengangkutan from './pages/utillity/MasterPengangkutan';
import Summary from './pages/utillity/Summary';
import LoginForm from './pages/login/LoginForm';
import DetailPengiriman from './pages/pengiriman/DetailPengiriman';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/userconfig" element={<UserConfig />} />
        <Route path="/buatpengiriman" element={<BuatPengiriman />} />
        <Route exact path="/listpengiriman" element={<ListPengiriman />} />
        <Route path="/buatberita" element={<BuatBerita />} />
        <Route path="/listberita" element={<ListBerita />} />
        <Route path="/mastercustomer" element={<MasterCustomer />} />
        <Route path="/masterkendaraan" element={<MasterKendaraan />} />
        <Route path="/masterteli" element={<MasterTeli />} />
        <Route path="/masterpengangkutan" element={<MasterPengangkutan />} />
        <Route path="/summary" element={<Summary />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route path="listpengiriman/detailpengiriman" element={<DetailPengiriman />} />
      </Routes>
    </>
  );
}

export default App;
