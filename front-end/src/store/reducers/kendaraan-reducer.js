import {
    CREATE_KENDARAAN,
    UPDATE_KENDARAAN,
    EDIT_KENDARAAN,
    RETRIEVE_KENDARAAN,
    DELETE_KENDARAAN,
    DELETE_ALL_KENDARAAN
} from "../actions/types";

const initialState = {
  list: [],
  selectedData: null,
}

function kendaraanReducer(kendaraans = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_KENDARAAN:
          return {
            ...kendaraans,
            list: [...kendaraans.list, payload]
          }
    
        case RETRIEVE_KENDARAAN:
          return {
            ...kendaraans,
            list: payload.kendaraans
          }

        case EDIT_KENDARAAN:
          const getEdit = kendaraans.list.find(item => item.id === payload);
          return {
            ...kendaraans,
            selectedData: getEdit
          }
    
        case UPDATE_KENDARAAN:
          const updatedList = kendaraans.list.map((kendaraan) => {
            if (kendaraan.id === payload.id) {
              return {
                ...kendaraan,
                ...payload,
              };
            } else {
              return kendaraan;
            }
          });
          return {
            ...kendaraans,
            list: updatedList
          }
    
        case DELETE_KENDARAAN:
          const deletedItem = kendaraans.list.filter(({ id }) => id !== payload.id);
          return {
            ...kendaraans,
            list: deletedItem
          }
    
        case DELETE_ALL_KENDARAAN:
          return {
            list: [],
            selectedData: null
          }
          
        default:
          return kendaraans;
      }

}

export default kendaraanReducer;