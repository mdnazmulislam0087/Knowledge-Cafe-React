
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookMarks] = useState([])
  const handleAddToBookmarks = blog =>{
    console.log("Bookmark adding soon")
  }
  return (
    <>

      {/* <h1 className='bg-orange-200'>React with Tailwind</h1> */}
      <Header className="max-w-6xl my-12 mx-auto"></Header>
      <div className='md:flex max-w-6xl my-12 mx-auto'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks></Bookmarks>
      </div>


    </>
  )
}

export default App
