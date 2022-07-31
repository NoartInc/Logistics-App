import { 
    CREATE_TELI,
    UPDATE_TELI,
    EDIT_TELI,
    RETRIEVE_TELI,
    DELETE_TELI,
    DELETE_ALL_TELI
} from '../actions/types' ;

const initialState = {
    list: [],
    selectedData: null
}

function teliReducer(telis = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TELI:
            return {
                ...telis,
                list: [...telis.list, payload]
            }

        case RETRIEVE_TELI:
            return {
                ...telis,
                list: payload.telis
            }

        case EDIT_TELI:
            const getEdit = telis.list.find(item => item.id === payload)
            return { 
                ...telis,
                selectedData: getEdit
            }
        
        case UPDATE_TELI:
            const updateList = telis.list.map((teli) => {
                if (teli.id === payload.id) {
                    return {
                        ...teli,
                        ...payload,
                    }
                } else {
                    return teli;
                }
            });
            return { 
                ...telis,
                list: updateList
            }

        case DELETE_TELI:
            const deletedItem = telis.list.filter(({ id }) => id !== payload.id);
            return {
                ...telis,
                list: deletedItem
            }
            
        case DELETE_ALL_TELI:
            return {
                list: [],
                selectedData: null
            }

        default:
            return telis;
    }
}

export default teliReducer;