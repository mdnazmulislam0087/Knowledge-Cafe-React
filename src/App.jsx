
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookMarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)


  const handleAddToBookmarks = blog =>{
    // console.log("Bookmark adding soon")
    const newBookMark = [...bookmarks, blog]
    setBookMarks(newBookMark)
  }

  const handleReadingTime = time =>{
      console.log("Reading time", time)
      const newTime = readingTime + time
      setReadingTime(newTime)
      // console.log(readingTime)
  }
  return (
    <>

      {/* <h1 className='bg-orange-200'>React with Tailwind</h1> */}
      <Header className="max-w-6xl my-12 mx-auto"></Header>
      <div className='md:flex max-w-6xl my-12 mx-auto'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime ={readingTime}></Bookmarks>
      </div>


    </>
  )
}

export default App
