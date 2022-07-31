import { 
    CREATE_CUSTOMER,
    RETRIEVE_CUSTOMER,
    EDIT_CUSTOMER,
    UPDATE_CUSTOMER,
    DELETE_CUSTOMER,
    DELETE_ALL_CUSTOMER
} from '../actions/types';

const initialState = {
    list: [],
    selectedData: null
}

function customerReducer(customers = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_CUSTOMER:
            return {
                ...customers,
                list: [...customers.list, payload]
            }
        
        case RETRIEVE_CUSTOMER:
            return {
                ...customers,
                list: payload.customers
            }

        case EDIT_CUSTOMER:
            const getEdit = customers.list.find(item => item.id === payload)
            return {
                ...customers,
                selectedData: getEdit
            }

        case UPDATE_CUSTOMER:
            const updatedList = customers.list.map((customer) => {
                if (customer.id === payload.id) {
                    return {
                        ...customer,
                        ...payload
                    };
                } else {
                    return customer;
                }
            });
            return {
                ...customers,
                list: updatedList
            }

        case DELETE_CUSTOMER:
            // kalo mau langsung id di spread dulu. tadi belum di spread mas. ohh i see
            const deletedItem = customers.list.filter(({ id }) => id !== payload.id)
            return {
                ...customers,
                list: deletedItem
            }

        case DELETE_ALL_CUSTOMER:
            return {
                list: [],
                selectedData: null
            }

        default:
            return customers;
    }

}

export default customerReducer;