const initialState = {
  lenguage: false,
  menuLenguage: false,
  information: false,
  data: null,
  isLoad: false,
  actualMovie: JSON.parse(sessionStorage.getItem('actualMovie')) || null,
  isAuthenticated: sessionStorage.getItem('isAuthenticated') || false,
  error: ''
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
    case 'SET_ACTUAL_MOVIE':return {
      ...state,
      actualMovie: action.payload
    }
    case 'SET_USER_AUTHENTICATED':return {
      ...state,
      isAuthenticated: true
    }
    case 'SET_ERROR_MESSAGE':return {
      ...state,
      error: action.payload
    }
  }
}

export { initialState, reducer }
