import './App.css'
import BlogPosts from './components/pages/BlogPosts'
import Menu from './components/layout/Menu'
import Header from './components/layout/Header'
import Post from './components/pages/Post'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Header />
        <Routes>
          <Route path="/" element={<BlogPosts />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
