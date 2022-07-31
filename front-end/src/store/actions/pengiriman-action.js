import {
    CREATE_PENGIRIMAN,
    RETRIEVE_PENGIRIMAN,
    UPDATE_PENGIRIMAN, 
    EDIT_PENGIRIMAN,
    DELETE_PENGIRIMAN,
    DELETE_ALL_PENGIRIMAN,
} from '../actions/types';

import PengirimanDataService from '../../services/pengiriman.service';

export const createPengiriman = (form) => async (dispatch) => {
    try {
        const res = await PengirimanDataService.create(form);
        dispatch({
            type: CREATE_PENGIRIMAN,
            payload: res.data.data
        });
        return Promise.resolve(res.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrievePengiriman = () => async (dispatch) => {
    try {
        const res = await PengirimanDataService.getAll()
        dispatch({
            type: RETRIEVE_PENGIRIMAN,
            payload: {
                pengirimans: res.data
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
        console.log(err)
    }
};

export const updatePengiriman = (data) => async (dispatch) => {
    try {
        const res = await PengirimanDataService.update(data.id, data)
        dispatch({
            type: UPDATE_PENGIRIMAN,
            payload: data,
        });
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err)
    }
};

export const deletePengiriman = (id) => async (dispatch) => {
    try {
        await PengirimanDataService.delete(id)
        dispatch({
            type: DELETE_PENGIRIMAN,
            payload: {id}
        })  
    } catch (err) {
        console.log(err)
    }
};

export const deleteAllPengiriman = () => async (dispatch) => {
    try {
        const res = await PengirimanDataService.deleteAll()
        dispatch({
            type: DELETE_ALL_PENGIRIMAN,
            payload: res.data
        })
        return Promise.resolve(res.data)   
    } catch (err) {
        return Promise.reject(err)
    }
};