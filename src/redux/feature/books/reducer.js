import { ADDEDBOOK, LOADEDBOOK } from "./actionType";

const initialState = {
    books:[]
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
      case LOADEDBOOK:
        return {
          ...state,
          books:[ ...action.payload],
        };
       case ADDEDBOOK:
        return{
            ...state,
            books: [...state.books, action.payload]
        }
        default:
        return state;
    }
}

export default reducer;