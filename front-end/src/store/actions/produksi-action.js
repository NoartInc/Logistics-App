import { 
    CREATE_PRODUKSI,
    RETRIEVE_PRODUKSI,
    EDIT_PRODUKSI,
    UPDATE_PRODUKSI,
    DELETE_PRODUKSI,
    DELETE_ALL_PRODUKSI,
} from "./types";

import ProduksiDataService from "../../services/produksi.service";

export const createProduksi = (form) => async (dispatch) => {
    try {
        const res = await ProduksiDataService.create(form);
        dispatch({
            type: CREATE_PRODUKSI,
            payload: res.data.data,
        });
        return Promise.resolve(res.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveProduksis = () => async (dispatch) => {
    try {
        const res = await ProduksiDataService.getAll()
        dispatch({
            type: RETRIEVE_PRODUKSI,
            payload: {
                produksis: res.data
            },
        });
    } catch (err) {
        console.log(err)
    }
};

export const editProduksi = (id) => async (dispatch) => {
    try {
        const res = await ProduksiDataService.get(id)
        return res.data; 
    } catch (err) {
        console.log(err)
    }
};

export const updateProduksi = (data) => async (dispatch) => {
    try {
        const res = await ProduksiDataService.update(data.id,data)
        dispatch({
            type: UPDATE_PRODUKSI,
            payload: data
        })
        return Promise.resolve(res.data)  
    } catch (err) {
        return Promise.reject(err)
    }
};

export const deleteProduksi = (id) => async (dispatch) => {
    try {
        await ProduksiDataService.delete(id)
        dispatch({
            type: DELETE_PRODUKSI,
            payload: {id},
        })  
    }   catch (err) {
        console.log(err)
    }
};

export const deleteAllProduksis = () => async (dispatch) => {
    try {
        const res = await ProduksiDataService.deleteAll()
        dispatch({
            type: DELETE_ALL_PRODUKSI,
            payload: res.data,
        })
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err)
    }
};

