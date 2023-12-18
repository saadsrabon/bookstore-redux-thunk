
import './App.css'
import { Card } from './components/card'

function App() {
  

  return (
    <>
       <nav className="py-4 2xl:px-6">
    <div className="container flex items-center justify-between">
      <img src="./images/logo.svg" width="150px" className="object-contain" />

      <ul className="hidden md:flex items-center space-x-6">
        <li className="font-semibold cursor-pointer">Book Store</li>
        <li className="cursor-pointer">Wishlist</li>
        <li className="cursor-pointer">My Collection</li>
      </ul>

      <form className="flex items-center">
        <div className="group relative rounded-md bg-white">
          <svg width="20" height="20" fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">
            </path>
          </svg>
          <input type="text" placeholder="Filter books..." className="search" id="lws-searchBook" />
        </div>
      </form>
    </div>
  </nav>

  <main className="py-12 2xl:px-6">
    <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button className="filter-btn active-filter" id="lws-filterAll">All</button>
            <button className="filter-btn" id="lws-filterFeatured">Featured</button>
          </div>
        </div>
        <div className="lws-bookContainer">
          {/* <!-- Card 1 --> */  }
          {/* Need to map through the books from server and pass it card component */}
          <Card/>
        </div>
      </div>
      <div>
        <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
          <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
          <form className="book-form">
            <div className="space-y-2">
              <label htmlFor="name">Book Name</label>
              <input required className="text-input" type="text" id="input-Bookname" name="name" />
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
    </div>
  </main>
    </>
  )
}

export default App
