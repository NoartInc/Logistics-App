import { 
    CREATE_GRADING,
    UPDATE_GRADING,
    EDIT_GRADING,
    RETRIEVE_GRADING,
    DELETE_GRADING,
} from '../actions/types' ;

const initialState = {
    list: [],
    selectedData: null
}

function gradingReducer(gradings = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_GRADING:
            return {
                ...gradings,
                list: [...gradings.list, payload],
                selectedData: null
            }

        case RETRIEVE_GRADING:
            return {
                ...gradings,
                list: payload.gradings
            }

        case EDIT_GRADING:
            return { 
                ...gradings,
                selectedData: payload
            }
        
        case UPDATE_GRADING:
            const updagradings = gradings.list.map((grading) => {
                if (grading.id === payload.id) {
                    return {
                        ...grading,
                        ...payload,
                    }
                } else {
                    return grading;
                }
            });
            return { 
                ...gradings,
                list: updagradings,
                selectedData: null
            }

        case DELETE_GRADING:
            const deletedItem = gradings.list.filter(({ id }) => id !== payload.id);
            return {
                ...gradings,
                list: deletedItem
            }

        default:
            return gradings;
    }
}

export default gradingReducer;