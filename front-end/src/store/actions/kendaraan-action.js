import { 
    CREATE_KENDARAAN,
    RETRIEVE_KENDARAAN,
    EDIT_KENDARAAN,
    UPDATE_KENDARAAN,
    DELETE_KENDARAAN,
    DELETE_ALL_KENDARAAN
} from '../actions/types';

import KendaraanDataService from '../../services/kendaraan.service';

// Rsponse axios default itu mengambil property res.data
// jadi kalo ada response dari back-end misalkan message dan data
// kalo mau dapatkan property message harusnya jadi -> res.data.message
// kalo mau dapatkan property data harusnya jadi -> res.data.data

export const createKendaraan = (form) => async (dispatch) => {
    try {
        const res = await KendaraanDataService.create(form);
        dispatch({
            type: CREATE_KENDARAAN,
            payload: res.data.data,    
        });
        return Promise.resolve(res.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveKendaraan = () => async (dispatch) => {
    try {
        const res = await KendaraanDataService.getAll()
        dispatch({
            type: RETRIEVE_KENDARAAN,
            payload: {
                kendaraans: res.data
            },
        });
    } catch (err) {
        console.log(err)
    }
};

export const editKendaraan = (id) => async (dispatch) => {
    try {
        dispatch({
            type: EDIT_KENDARAAN,
            payload: id
        })
    } catch (err) {
        console.log(err)
    }
}

export const updateKendaraan = (data) => async (dispatch) => {
    try {
        const res = await KendaraanDataService.update(data.id, data)
        dispatch({
            type: UPDATE_KENDARAAN,
            payload: data,
        });
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err)
    }
};

export const deleteKendaraan = (id) => async (dispatch) => {
    try {
        await KendaraanDataService.delete(id)
        dispatch({
            type: DELETE_KENDARAAN,
            payload: {id},
        });
    }  catch (err) {
        console.log(err)
    }
};

export const deleteAllKendaraan = () => async (dispatch) => {
    try {
        const res = await KendaraanDataService.deleteAll()
        dispatch({
            type: DELETE_ALL_KENDARAAN,
            payload: res.data,
        })
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err)
    }
};

export const findKendaraanByFullname = (fullname) => async (dispatch) => {
    try {
        const res = await KendaraanDataService.findByFullname(fullname)
        dispatch({
            type: RETRIEVE_KENDARAAN,
            payload: res.data,
        })
    } catch (err) {
        console.log(err)
    }
};