import {  loadedBooks } from './../actionsCreator';
const fetchbooks=async(dispatch)=>{
    const response=await fetch(`http://localhost:9000/books`);
    const data=await response.json();
   dispatch(loadedBooks(data));
}

export default fetchbooks;