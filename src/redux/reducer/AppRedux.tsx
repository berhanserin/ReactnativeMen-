const types = {
  OPEN_MENU: 'OPEN_MENU',
  CHANGE_MENU_COLOR: 'CHANGE_MENU_COLOR',
};

export const actions = {
  changeMenu: ({dispatch, changeMenu}: {dispatch: any; changeMenu: any}): any =>
    dispatch({type: types.OPEN_MENU, changeMenu}),

  changeMenuColor: ({
    dispatch,
    changeMenuColor,
  }: {
    dispatch: any;
    changeMenuColor: any;
  }): any => dispatch({type: types.CHANGE_MENU_COLOR, changeMenuColor}),
};

const initialState = {
  isMenu: false,
  manuBackground: '#1e1e23',
};

export const reducer = (
  state = initialState,
  action: {type: any; changeMenu: any; changeMenuColor: any},
): any => {
  const {type, changeMenu, changeMenuColor} = action;

  switch (type) {
    case types.OPEN_MENU:
      return {...state, isMenu: changeMenu};

    case types.CHANGE_MENU_COLOR:
      return {...state, manuBackground: changeMenuColor};

    default:
      return state;
  }
};
