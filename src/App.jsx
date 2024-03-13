
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {


  return (
    <>

      {/* <h1 className='bg-orange-200'>React with Tailwind</h1> */}
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>


    </>
  )
}

export default App
