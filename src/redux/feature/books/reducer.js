import { ADDEDBOOK } from "./actionType";

const initialState = {}

const reducer = (state = initialState, action) => {

    switch (action.type) {
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