import { useState } from 'react'
import './App.css'
import Bookmarkes from './assets/components/bookmarks/Bookmarkes'
import Header from './assets/components/header/Header'
import Blogs from './assets/components/header/blogs/Blogs'

function App() {
 const [bookmark,setBookmark] = useState([]);

 const handeladdbookMark = blog =>{
  const newBookMarks = [...bookmark,blog];
  setBookmark(newBookMarks)
 }
  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
      <Blogs  handeladdbookMark={handeladdbookMark}></Blogs>
      <Bookmarkes bookmark={bookmark}></Bookmarkes>
    </div>
    </>
  )
}

export default App
