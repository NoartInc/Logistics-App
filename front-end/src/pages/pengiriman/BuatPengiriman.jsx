import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import PengirimanInputForm from '../../partials/pengiriman-content/PengirimanInputForm';
import { toggleBanner } from '../../store/actions/layout-action';

function BuatPengiriman() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(toggleBanner(false));
    }, 500);
  }, []);

  return <PengirimanInputForm />
}

export default BuatPengiriman