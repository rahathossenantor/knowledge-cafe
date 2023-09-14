import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from "./components/Header/Header"

function App() {

  return (
    <>
      <Header></Header>
      <hr className='mb-5'/>
      <Blogs></Blogs>
    </>
  )
}

export default App
