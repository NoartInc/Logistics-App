import {
  CREATE_PENGIRIMAN,
  RETRIEVE_PENGIRIMAN,
  UPDATE_PENGIRIMAN,
  EDIT_PENGIRIMAN,
  MODIFY_PENGIRIMAN,
  DELETE_PENGIRIMAN,
  DELETE_ALL_PENGIRIMAN,
  EXPORT_DATA_PENGIRIMAN,
  GET_DASHBOARD,
} from "../actions/types";

const initialState = {
  list: [],
  page: 1,
  pageCount: 0,
  pageSize: 25,
  selectedData: null,
  summary: null,
  search: "",
  filters: null
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
        list: payload.pengirimans?.rows,
        pageCount: payload.pengirimans?.pageCount
      };

    case 'SET_PAGE':
      return {
        ...pengirimans,
        page: payload + 1
      };

    case 'SET_SEARCH':
      return {
        ...pengirimans,
        page: 1,
        search: payload
      }

    case 'SET_FILTER':
      return {
        ...pengirimans,
        page: 1,
        filters: payload
      }

    case 'SET_PAGE_SIZE':
      return {
        ...pengirimans,
        pageSize: payload
      }

    case EDIT_PENGIRIMAN:
      const getEdit = pengirimans?.list?.find((item) => item?.id === payload);
      return {
        ...pengirimans,
        selectedData: getEdit,
      };

    case MODIFY_PENGIRIMAN:
      // ini bukannya nge-set data untuk di edit ?
      const getModify = pengirimans?.list?.find((item) => item?.id === payload);
      return {
        ...pengirimans,
        selectedData: getModify,
      };

    // Coba pake ini aja
    case UPDATE_PENGIRIMAN:
      const updateList = pengirimans?.list?.map((pengiriman) => {
        if (pengiriman?.id === payload?.id) {
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
      const deletedItem = pengirimans?.list?.filter(
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

    case GET_DASHBOARD:
      return {
        ...pengirimans,
        summary: action.payload
      }

    default:
      return pengirimans;
  }
}

export default pengirimanReducer;
