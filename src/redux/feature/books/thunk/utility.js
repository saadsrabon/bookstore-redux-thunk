import {  addedBook, loadedBooks } from './../actionsCreator';
export const fetchbooks=async(dispatch)=>{
    const response=await fetch(`http://localhost:9000/books`);
    const data=await response.json();
   dispatch(loadedBooks(data));
}

export const addbookThunk=(book)=>{
    return async(dispatch)=>{
        const response=await fetch(`http://localhost:9000/books`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json; charset=UTF-8",
            },
            body:JSON.stringify(book),
        });
        const data=await response.json();
        dispatch(addedBook(data));
    }
}