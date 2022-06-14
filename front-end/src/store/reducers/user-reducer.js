import { 
    CREATE_USER,
    RETRIEVE_USER,
    UPDATE_USER,
    DELETE_USER,
    DELETE_ALL_USER
} from '../actions/types';

const initialState = []

function userReducer(users = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case CREATE_USER:
            return [...users, payload.user]

        case RETRIEVE_USER:
            return payload

        case UPDATE_USER:
            return users.map((user) => {
                if (user.id === payload.id) {
                    return {
                        ...user,
                        ...payload,
                    }
                } else {
                    return user
                }
            })
        
        case DELETE_USER:
            return users.filter(({ id }) => id !== payload.id)
        
        case DELETE_ALL_USER:
            return []
        
        default:
            return users
    }
}

export default userReducer