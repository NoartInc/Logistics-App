import {
  CREATE_PENGIRIMAN,
  RETRIEVE_PENGIRIMAN,
  UPDATE_PENGIRIMAN,
  EDIT_PENGIRIMAN,
  DELETE_PENGIRIMAN,
  DELETE_ALL_PENGIRIMAN,
  EXPORT_DATA_PENGIRIMAN,
} from "../actions/types";

const initialState = {
  list: [],
  selectedData: null,
};

function pengirimanReducer(pengirimans = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PENGIRIMAN:
      return {
        ...pengirimans,
        list: [...pengirimans.list, payload],
      };

    case RETRIEVE_PENGIRIMAN:
      return {
        ...pengirimans,
        list: payload.pengirimans,
      };

    case EDIT_PENGIRIMAN:
      const getEdit = pengirimans.list.find((item) => item.id === payload);
      return {
        ...pengirimans,
        selectedData: getEdit,
      };

    case UPDATE_PENGIRIMAN:
      const updateList = pengirimans.list.map((pengiriman) => {
        if (pengiriman.id === payload.id) {
          return {
            ...pengiriman,
            ...payload,
          };
        } else {
          return pengiriman;
        }
      });
      return {
        ...pengirimans,
        list: updateList,
      };

    case DELETE_PENGIRIMAN:
      const deletedItem = pengirimans.list.filter(
        ({ id }) => id !== payload.id
      );
      return {
        ...pengirimans,
        list: deletedItem,
      };

    case DELETE_ALL_PENGIRIMAN:
      return {
        list: [],
        selectedData: null,
      };

    default:
      return pengirimans;
  }
}

export default pengirimanReducer;
