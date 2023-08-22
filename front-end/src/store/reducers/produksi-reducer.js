import { 
    CREATE_PRODUKSI,
    UPDATE_PRODUKSI,
    EDIT_PRODUKSI,
    RETRIEVE_PRODUKSI,
    DELETE_PRODUKSI,
    DELETE_ALL_PRODUKSI
} from '../actions/types' ;

const initialState = {
    list: [],
    selectedData: null
}

function produksiReducer(produksis = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_PRODUKSI:
            return {
                ...produksis,
                list: [...produksis.list, payload]
            }

        case RETRIEVE_PRODUKSI:
            return {
                ...produksis,
                list: payload.produksis
            }

        case EDIT_PRODUKSI:
            const getEdit = produksis.list.find(item => item.id === payload)
            return { 
                ...produksis,
                selectedData: getEdit
            }
        
        case UPDATE_PRODUKSI:
            const updateList = produksis.list.map((produksi) => {
                if (produksi.id === payload.id) {
                    return {
                        ...produksi,
                        ...payload,
                    }
                } else {
                    return produksi;
                }
            });
            return { 
                ...produksis,
                list: updateList
            }

        case DELETE_PRODUKSI:
            const deletedItem = produksis.list.filter(({ id }) => id !== payload.id);
            return {
                ...produksis,
                list: deletedItem
            }
            
        case DELETE_ALL_PRODUKSI:
            return {
                list: [],
                selectedData: null
            }

        default:
            return produksis;
    }
}

export default produksiReducer;