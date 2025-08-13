import './App.css'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import BlogPosts from './components/pages/BlogPosts'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Post from './components/pages/Post'
import ReadPost from './components/pages/ReadPost'
import AuthProvider from './components/auth/AuthProvider'
import ProtectedRoute from './components/auth/ProtectedRoute'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Sidebar />
          <div className="ml-64">
            <Header />
            <Routes>
              <Route path="/entvy_blog_admin/login" element={<Login />} />
              <Route path="/entvy_blog_admin/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
                } />
              <Route path="/entvy_blog_admin/posts" element={
                <ProtectedRoute>
                  <BlogPosts />
                </ProtectedRoute>
                } />
              <Route path="/entvy_blog_admin/post" element={
                <ProtectedRoute>
                  <Post />
                </ProtectedRoute>
                } />
              <Route path="/entvy_blog_admin/read" element={
                <ProtectedRoute>
                  <ReadPost />
                </ProtectedRoute>
                } />
              <Route path="/entvy_blog_admin/" element={<Navigate to="/entvy_blog_admin/dashboard" replace />} />
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
