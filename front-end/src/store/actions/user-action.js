import { 
    CREATE_USER,
    RETRIEVE_USER,
    UPDATE_USER,
    DELETE_USER,
    DELETE_ALL_USER
} from './actions/types';

import UserDataService from '../../services/user.service';

export const createUser = (fullname, username, password, email, contact, role, jabatan, status) => async (dispatch) => {
    try {
        const res = await UserDataService.create({ fullname, username, password, email, contact, role, jabatan, status });
        dispatch({
            type: CREATE_USER,
            payload: res.data,    
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveUsers = () => async (dispatch) => {
    try {
        const res = await UserDataService.getAll()
        dispatch({
            type: RETRIEVE_USER,
            payload: {
                users: res.data
            },
        });
    } catch (err) {
        console.log(err)
    }
};

export const updateUser = (id, data) => async (dispatch) => {
    try {
        const res = await UserDataService.update(id, data)
        dispatch({
            type: UPDATE_USER,
            payload: data,
        });
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err)
    }
};

export const deleteUser = (id) => async (dispatch) => {
    try {
        await UserDataService.delete(id)
        dispatch({
            type: DELETE_USER,
            payload: {id},
        });
    }  catch (err) {
        console.log(err)
    }
};

export const deleteAllUsers = () => async (dispatch) => {
    try {
        const res = await UserDataService.deleteAll()
        dispatch({
            type: DELETE_ALL_USER,
            payload: res.data,
        })
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err)
    }
};

export const findUsersByFullname = (fullname) => async (dispatch) => {
    try {
        const res = await UserDataService.findByFullname(fullname)
        dispatch({
            type: RETRIEVE_USER,
            payload: res.data,
        })
    } catch (err) {
        console.log(err)
    }
};