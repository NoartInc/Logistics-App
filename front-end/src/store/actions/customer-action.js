import { 
    CREATE_CUSTOMER,
    RETRIEVE_CUSTOMER,
    EDIT_CUSTOMER,
    UPDATE_CUSTOMER,
    DELETE_CUSTOMER,
    DELETE_ALL_CUSTOMER
} from '../actions/types';

import CustomerDataService from '../../services/customer.service';

export const createCustomer = (form) => async (dispatch) => {
    try {
        const res = await CustomerDataService.create(form);
        dispatch({
            type: CREATE_CUSTOMER,
            payload: res.data.data
        });
        return Promise.resolve(res.data.data)
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveCustomers = () => async (dispatch) => {
    try {
        const res = await CustomerDataService.getAll();
        dispatch({
            type: RETRIEVE_CUSTOMER,
            payload: {
                customers: res.data
            }
        });
    } catch (err) {
        console.log(err);
    }
}

export const editCustomer = (id) => async (dispatch) => {
    try {
        dispatch({
            type: EDIT_CUSTOMER,
            payload: id
        })
    } catch (err) {
        console.log(err)
    }
}

export const updateCustomer = (data) => async (dispatch) => {
    try {
        const res  = await CustomerDataService.update(data.id, data);
        dispatch({
            type: UPDATE_CUSTOMER,
            payload: data,
        })
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err);
    }
}

export const deleteCustomer = (id) => async (dispatch) => {
    try {
        await CustomerDataService.delete(id)
        dispatch({
            type: DELETE_CUSTOMER,
            payload: {
                id
            }
        });
    } catch (err) {
        console.log(err)
    }
};

export const deleteAllCustomers = () => async (dispatch) => {
    try {
        const res = await CustomerDataService.deleteAll()
        dispatch({
            type: DELETE_ALL_CUSTOMER,
            payload: res.data
        })
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err)
    }
}