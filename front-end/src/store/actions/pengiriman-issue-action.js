import { 
    CREATE_ISSUE,
    RETRIEVE_ISSUE,
    UPDATE_ISSUE,
    DELETE_ISSUE,
    EDIT_ISSUE,
} from "./types";

import PengirimanIssueService from "../../services/pengiriman-issue.service";

export const createIssue = (form) => async (dispatch) => {
    try {
        const res = await PengirimanIssueService.create(form);
        dispatch({
            type: CREATE_ISSUE,
            payload: res.data.data,
        });
        return Promise.resolve(res.data.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveIssue = () => async (dispatch) => {
    try {
        const res = await PengirimanIssueService.getAll()
        dispatch({
            type: RETRIEVE_ISSUE,
            payload: {
                issues: res.data
            },
        });
    } catch (err) {
        console.log(err)
    }
};

export const editIssue = (id) => async (dispatch) => {
    try {
        const res = await PengirimanIssueService.get(id)
        dispatch({
            type: EDIT_ISSUE,
            payload: res.data
        });
        return Promise.resolve(res.data);
    } catch (err) {
        console.log(err)
    }
};

export const updateIssue = (data) => async (dispatch) => {
    try {
        const res = await PengirimanIssueService.update(data.id,data)
        dispatch({
            type: UPDATE_ISSUE,
            payload: data
        })
        return Promise.resolve(res.data)  
    } catch (err) {
        return Promise.reject(err)
    }
};

export const deleteIssue = (id) => async (dispatch) => {
    try {
        const res = await PengirimanIssueService.delete(id)
        dispatch({
            type: DELETE_ISSUE,
            payload: {id},
        });
        return Promise.resolve(res.data);
    }   catch (err) {
        console.log(err)
    }
};
