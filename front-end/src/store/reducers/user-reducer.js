import {
  CREATE_USER,
  RETRIEVE_USER,
  UPDATE_USER,
  DELETE_USER,
  DELETE_ALL_USER,
} from "../actions/types";

const initialState = [
  {
    id: "0",
    fullname: "M Afif Dalianda",
    username: "afif",
    password: "afif",
    role: "Administrator",
    jabatan: "IT",
    contact: "01823646123",
    email: "afif@mail.com",
    status: "active",
  },
  {
    id: "1",
    fullname: "Dennis Chiang",
    username: "denis",
    password: "denis",
    role: "Manager",
    jabatan: "HRD",
    contact: "01823612343",
    email: "dennis@mail.com",
    status: "inactive",
  },
];

function userReducer(users = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER:
      return [...users, payload.user];

    case RETRIEVE_USER:
      return payload.users

    case UPDATE_USER:
      return users.map((user) => {
        if (user.id === payload.id) {
          return {
            ...user,
            ...payload,
          };
        } else {
          return user;
        }
      });

    case DELETE_USER:
      return users.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_USER:
      return [];

    default:
      return users;
  }
}

export default userReducer;
