import { 
    CREATE_TELI,
    RETRIEVE_TELI,
    EDIT_TELI,
    UPDATE_TELI,
    DELETE_TELI,
    DELETE_ALL_TELI
} from "../actions/types";

import TeliDataService from "../../services/teli.service";

export const createTeli = (form) => async (dispatch) => {
    try {
        const res = await TeliDataService.create(form);
        dispatch({
            type: CREATE_TELI,
            payload: res.data.data,
        });
        return Promise.resolve(res.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveTelis = () => async (dispatch) => {
    try {
        const res = await TeliDataService.getAll()
        dispatch({
            type: RETRIEVE_TELI,
            payload: {
                telis: res.data
            },
        });
    } catch (err) {
        console.log(err)
    }
};

export const editTeli = (id) => async (dispatch) => {
    try {
        const res = await TeliDataService.get(id)
        return res.data; 
    } catch (err) {
        console.log(err)
    }
};

export const updateTeli = (data) => async (dispatch) => {
    try {
        const res = await TeliDataService.update(data.id,data)
        dispatch({
            type: UPDATE_TELI,
            payload: data
        })
        return Promise.resolve(res.data)  
    } catch (err) {
        return Promise.reject(err)
    }
};

export const deleteTeli = (id) => async (dispatch) => {
    try {
        await TeliDataService.delete(id)
        dispatch({
            type: DELETE_TELI,
            payload: {id},
        })  
    }   catch (err) {
        console.log(err)
    }
};

export const deleteAllTelis = () => async (dispatch) => {
    try {
        const res = await TeliDataService.deleteAll()
        dispatch({
            type: DELETE_ALL_TELI,
            payload: res.data,
        })
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err)
    }
};

export const countTonase = (id) => async (dispatch) => {
    try {
        const res = await TeliDataService.getTonase(id)
        return res.data.total
    } catch (err) {
        return Promise.reject(err)
    }
}