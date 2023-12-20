import { useDispatch } from "react-redux"

import { addbookThunk } from "../redux/feature/books/thunk/utility"



const BookForm = () => {
  const dispacth = useDispatch()
  const handleForm = (e) => {

    e.preventDefault()
   
    const book = {
// get all the values from the form
      bookname: e.target.bookname.value,
      author: e.target.author.value,
      thumbnail: e.target.thumbnail.value,
      price: e.target.price.value,
      rating: e.target.rating.value,
      featured: e.target.featured.checked
      
    }
    dispacth(addbookThunk(book))
  }
    
  return (
    <div>
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form onSubmit={handleForm} className="book-form">
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input required className="text-input" type="text" id="input-Bookname" name="bookname" />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input required className="text-input" type="text" id="input-Bookauthor" name="author" />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input required className="text-input" type="number" id="input-Bookprice" name="price" />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
          </div>
        </div>

        <div className="flex items-center">
          <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" />
          <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
        </div>

        <button type="submit" className="submit" id="submit">Add Book</button>
      </form>
    </div>
  </div>
  )
}

export default BookForm