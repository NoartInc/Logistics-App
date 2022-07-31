import { 
    CREATE_PENGANGKUTAN,
    RETRIEVE_PENGANGKUTAN,
    UPDATE_PENGANGKUTAN,
    DELETE_PENGANGKUTAN,
    DELETE_ALL_PENGANGKUTAN,
    EDIT_PENGANGKUTAN
} from "../actions/types";

import PengangkutanDataService from '../../services/pengangkutan.service';

export const createPengangkutan = (form) => async (dispatch) => {
    try {
        const res = await PengangkutanDataService.create(form);
        dispatch({
            type: CREATE_PENGANGKUTAN,
            payload: res.data.data,
        });
        return Promise.resolve(res.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrievePengangkutans = () => async (dispatch) => {
    try {
        const res = await PengangkutanDataService.getAll()
        dispatch({
            type: RETRIEVE_PENGANGKUTAN,
            payload: {
                pengangkutans: res.data
            },
        });
    } catch (err) {
        console.error(err);
    }
};

export const editPengangkutans = (id) => async (dispatch) => {
    try {
        dispatch({
            type: EDIT_PENGANGKUTAN,
            payload: id
        })
    } catch (err) {
        console.log(err);
    }
}

// nah ini kan 2 parameter, (id, data)
// kita jadikan 1 aja. karena si data udah mengandung id'nya
export const updatePengangkutan = (data) => async (dispatch) => {
    try {
        const res = await PengangkutanDataService.update(data.id, data)
        dispatch({
            type: UPDATE_PENGANGKUTAN,
            payload: data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deletePengangkutan = (id) => async (dispatch) => {
    try {
        await PengangkutanDataService.delete(id)
        dispatch({
            type: DELETE_PENGANGKUTAN,
            payload: {id},
        })  
    } catch (err) {
        console.log(err);
    }
};

export const deleteAllPengangkutan = () => async (dispatch) => {
    try {
        const res = await PengangkutanDataService.deleteAll()
        dispatch({
            type: DELETE_ALL_PENGANGKUTAN,
            payload: res.data
        })
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err)
    }
};