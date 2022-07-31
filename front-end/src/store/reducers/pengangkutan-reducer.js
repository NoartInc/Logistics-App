import {
    CREATE_PENGANGKUTAN,
    RETRIEVE_PENGANGKUTAN,
    UPDATE_PENGANGKUTAN,
    DELETE_PENGANGKUTAN,
    DELETE_ALL_PENGANGKUTAN,
    EDIT_PENGANGKUTAN
} from "../actions/types";

const initialState = {
    list: [],
    selectedData: null,
}


function pengangkutanReducer(pengangkutans = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_PENGANGKUTAN:
            return {
                ...pengangkutans,
                list: [...pengangkutans.list, payload]
            }

        case RETRIEVE_PENGANGKUTAN:
            return {
                ...pengangkutans,
                list: payload.pengangkutans
            }

        case EDIT_PENGANGKUTAN:
            const getEdit = pengangkutans.list.find(item => item.id === payload);
            return {
                ...pengangkutans,
                selectedData: getEdit
            }

        case UPDATE_PENGANGKUTAN:
            const updatedList = pengangkutans.list.map((pengangkutan) => {
                if (pengangkutan.id === payload.id) {
                    return {
                        ...pengangkutan,
                        ...payload,
                    };
                } else {
                    return pengangkutan;
                }
            });
            return {
                ...pengangkutans,
                list: updatedList
            }

        case DELETE_PENGANGKUTAN:
            const deletedItem = pengangkutans.list.filter(({ id }) => id !== payload.id);
            return {
                ...pengangkutans,
                list: deletedItem
            }

        case DELETE_ALL_PENGANGKUTAN:
            return {
                list: [],
                selectedData: null
            }

        default:
            return pengangkutans;
    }
}

export default pengangkutanReducer;