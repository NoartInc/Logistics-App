import {
  CREATE_USER,
  RETRIEVE_USER,
  UPDATE_USER,
  EDIT_USER,
  DELETE_USER,
  DELETE_ALL_USER,
} from "../actions/types";

const initialState = {
  list: [],
  selectedData: null
}

function userReducer(users = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER:
      return {
        ...users,
        list: [...users.list, payload]
      }

    case RETRIEVE_USER:
      return {
        ...users,
        list: payload.users
      }

    case EDIT_USER:
      const getEdit = users.list.find(item => item.id === payload)
      return { 
        ...users,
        selectedData: getEdit
      }

    case UPDATE_USER:
      const updatedList = users.list.map((user) => {
        if (user.id === payload.id) {
          return {
            ...user,
            ...payload,
          }
        } else {
          return user;
        }
      });
      return {
        ...users,
        list: updatedList
      }

    case DELETE_USER:
      const deletedItem = users.list.filter(({ id }) => id !== payload.id);
      return {
        ...users,
        list: deletedItem
      }

    case DELETE_ALL_USER:
      return {
        list: [],
        selectedData: null
      }

    default:
      return users;
  }
}

export default userReducer;
