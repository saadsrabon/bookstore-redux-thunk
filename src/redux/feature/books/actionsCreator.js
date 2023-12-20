import { ADDEDBOOK ,EDITEDBOOK,ADDFEATURE ,DELETEDBOOK, LOADEDBOOK} from './actionType';

export const addedBook = (book) => ({

    type: ADDEDBOOK,
    payload: book,
    });
export const editedBook = (book) => ({
    type: EDITEDBOOK,
    payload: book,
    });
export const addFeature = (feature) => ({
    type: ADDFEATURE,
    payload: feature,
    });
export const deletedBook = (bookID) => ({
    type: DELETEDBOOK,
    payload: bookID,
    });

   export  const loadedBooks =(book)=>({
          type: LOADEDBOOK,
          payload: book,

    })