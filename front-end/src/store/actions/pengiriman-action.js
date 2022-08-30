import {
  CREATE_PENGIRIMAN,
  RETRIEVE_PENGIRIMAN,
  UPDATE_PENGIRIMAN,
  EDIT_PENGIRIMAN,
  DELETE_PENGIRIMAN,
  DELETE_ALL_PENGIRIMAN,
  EXPORT_DATA_PENGIRIMAN,
  GET_DASHBOARD
} from "../actions/types";

import PengirimanDataService from "../../services/pengiriman.service";
import { userData } from "../../utils/constants";

export const createPengiriman = (form) => async (dispatch) => {
  try {
    const res = await PengirimanDataService.create(form);
    if (res.data?.data) {
      dispatch({
        type: CREATE_PENGIRIMAN,
        payload: res.data.data,
      });
    }
    return Promise.resolve(res.data?.data ?? null);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrievePengiriman = () => async (dispatch) => {
  const { user } = userData;
  try {
    const res = await PengirimanDataService.getAll(user.role);
    dispatch({
      type: RETRIEVE_PENGIRIMAN,
      payload: {
        pengirimans: res.data,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const editPengiriman = (id) => async (dispatch) => {
  try {
    // dispatch({
    //     type: EDIT_PENGIRIMAN,
    //     payload: id
    // })
    const res = await PengirimanDataService.get(id);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const updatePengiriman = (data) => async (dispatch) => {
  try {
    const res = await PengirimanDataService.update(data.id, data);
    dispatch({
      type: UPDATE_PENGIRIMAN,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deletePengiriman = (id) => async (dispatch) => {
  try {
    await PengirimanDataService.delete(id);
    dispatch({
      type: DELETE_PENGIRIMAN,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllPengiriman = () => async (dispatch) => {
  try {
    const res = await PengirimanDataService.deleteAll();
    dispatch({
      type: DELETE_ALL_PENGIRIMAN,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const exportDataPengiriman =
  (startDate, endDate) => async (dispatch) => {
    try {
      const res = await PengirimanDataService.exportData(startDate, endDate);
      dispatch({
        type: EXPORT_DATA_PENGIRIMAN,
        payload: res.data,
      });
      const { path } = res.data;
      const urlFile = path.replace("./public", "");
      console.log(urlFile);
      window.open(`https://transmetalroof.com:5000${urlFile}`);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const getDashboard = () => async (dispatch) => {
  try {
    const res = await PengirimanDataService.getDashboard();
    dispatch({
      type: GET_DASHBOARD,
      payload: res.data.results,
    });
  } catch (err) {
    console.error(err)
  }
}
