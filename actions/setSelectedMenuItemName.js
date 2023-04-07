import * as TYPES from "./types";

const setSelectedMenuItemName = (name) => (dispatch) => {
  if (!name) {
    dispatch({ type: TYPES.UNSET_SELECTED_MENU_ITEM_NAME });
  } else {
    dispatch({
      type: TYPES.SET_SELECTED_MENU_ITEM_NAME,
      payload: name,
    });
  }
};

export default setSelectedMenuItemName;
