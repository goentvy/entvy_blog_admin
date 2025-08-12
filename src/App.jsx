import './App.css'
import Login from './components/pages/Login'
import BlogPosts from './components/pages/BlogPosts'
import Sidebar from './components/layout/Sidebar'
import Post from './components/pages/Post'
import ReadPost from './components/pages/ReadPost'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/entvy_blog_admin/" element={<BlogPosts />} />
          <Route path="/entvy_blog_admin/login" element={<Login />} />
          <Route path="/entvy_blog_admin/post" element={<Post />} />
          <Route path="/entvy_blog_admin/read" element={<ReadPost />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
