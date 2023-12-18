import { ADDEDBOOK ,EDITEDBOOK,ADDFEATURE ,DELETEDBOOK} from './actionType';

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
