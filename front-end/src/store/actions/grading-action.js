import { 
    CREATE_GRADING,
    RETRIEVE_GRADING,
    UPDATE_GRADING,
    DELETE_GRADING,
    EDIT_GRADING,
} from "./types";

import GradingDataService from "../../services/grading.service";

export const createGrading = (form) => async (dispatch) => {
    try {
        const res = await GradingDataService.create(form);
        dispatch({
            type: CREATE_GRADING,
            payload: res.data.data,
        });
        return Promise.resolve(res.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveGrading = () => async (dispatch) => {
    try {
        const res = await GradingDataService.getAll()
        dispatch({
            type: RETRIEVE_GRADING,
            payload: {
                gradings: res.data
            },
        });
    } catch (err) {
        console.log(err)
    }
};

export const editGrading = (id) => async (dispatch) => {
    try {
        const res = await GradingDataService.get(id)
        dispatch({
            type: EDIT_GRADING,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (err) {
        console.log(err)
    }
};

export const updateGrading = (data) => async (dispatch) => {
    try {
        const res = await GradingDataService.update(data.id,data)
        dispatch({
            type: UPDATE_GRADING,
            payload: data
        })
        return Promise.resolve(res.data)  
    } catch (err) {
        return Promise.reject(err)
    }
};

export const deleteGrading = (id) => async (dispatch) => {
    try {
        const res = await GradingDataService.delete(id)
        dispatch({
            type: DELETE_GRADING,
            payload: {id},
        });
        return Promise.resolve(res.data);
    }   catch (err) {
        console.log(err)
    }
};
