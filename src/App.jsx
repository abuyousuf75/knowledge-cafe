import './App.css'
import Bookmarkes from './assets/components/bookmarks/Bookmarkes'
import Header from './assets/components/header/Header'
import Blogs from './assets/components/header/blogs/Blogs'

function App() {
 
  return (
    <>
    <Header></Header>
    <div className='md:flex'>
      <Blogs></Blogs>
      <Bookmarkes></Bookmarkes>
    </div>
    </>
  )
}

export default App
