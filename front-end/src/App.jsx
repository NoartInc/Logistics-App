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
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/userlist" element={<UserList />} />
        <Route exact path="/userconfig" element={<UserConfig />} />
        <Route exact path="/buatpengiriman" element={<BuatPengiriman />} />
        <Route exact path="/listpengiriman" element={<ListPengiriman />} />
        <Route exact path="/buatberita" element={<BuatBerita />} />
        <Route exact path="/listberita" element={<ListBerita />} />
        <Route exact path="/mastercustomer" element={<MasterCustomer />} />
        <Route exact path="/masterkendaraan" element={<MasterKendaraan />} />
        <Route exact path="/masterteli" element={<MasterTeli />} />
        <Route exact path="/masterpengangkutan" element={<MasterPengangkutan />} />
        <Route exact path="/summary" element={<Summary />} />
        <Route exact path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
