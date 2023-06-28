const initialState = {
  lenguage: false,
  menuLenguage: false,
  information: false,
  data: null,
  isLoad: false
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
    case 'FETCH_HAS_BEEN_ENDED':return {
      ...state,
      isLoad: true
    }
    case 'GET_FINAL_DATA':return {
      ...state,
      data: action.value
    }
  }
}

export { initialState, reducer }
