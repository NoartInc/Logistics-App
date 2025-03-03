import { 
    CREATE_ISSUE,
    UPDATE_ISSUE,
    EDIT_ISSUE,
    RETRIEVE_ISSUE,
    DELETE_ISSUE,
} from '../actions/types' ;

const initialState = {
    list: [],
    selectedData: null
}

function pengirimanIssueReducer(issues = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_ISSUE:
            return {
                ...issues,
                list: [...issues.list, payload],
                selectedData: null
            }

        case RETRIEVE_ISSUE:
            return {
                ...issues,
                list: payload.issues
            }

        case EDIT_ISSUE:
            return { 
                ...issues,
                selectedData: payload
            }
        
        case UPDATE_ISSUE:
            const updaissues = issues.list.map((grading) => {
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
                ...issues,
                list: updaissues,
                selectedData: null
            }

        case DELETE_ISSUE:
            const deletedItem = issues.list.filter(({ id }) => id !== payload.id);
            return {
                ...issues,
                list: deletedItem
            }

        default:
            return issues;
    }
}

export default pengirimanIssueReducer;