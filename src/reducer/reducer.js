const initialState = {
  lenguage: false,
  menuLenguage: false,
  information: false
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'HIDE_LENGUAGE':return {
      ...state,
      lenguage: false
    }
    case 'SHOW_LENGUAGE':return {
      ...state,
      lenguage: true
    }
    case 'SHOW_MENU_LENGUAGE':return {
      ...state,
      menuLenguage: true
    }
    case 'HIDE_MENU_LENGUAGE':return {
      ...state,
      menuLenguage: false
    }
  }
}

export { initialState, reducer }
