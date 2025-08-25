import './App.css'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import BlogPosts from './components/pages/BlogPosts'
import RootLayout from './pages/layout'
import Post from './components/pages/Post'
import ReadPost from './components/pages/ReadPost'
import AuthProvider from './components/auth/AuthProvider'
import ProtectedRoute from './components/auth/ProtectedRoute'
import { HashRouter, Navigate } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import Main from './pages'

function App() {
    return (
        <>
            <HashRouter>
                <AuthProvider>
                    <Routes>
                        <Route element={<RootLayout />}>
                            <Route index element={<Main />}/>
                            <Route path="/login" element={<Login />} />
                            <Route path="/dashboard" element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            } />
                            <Route path="/posts" element={
                                <ProtectedRoute>
                                    <BlogPosts />
                                </ProtectedRoute>
                            } />
                            <Route path="/post" element={
                                <ProtectedRoute>
                                    <Post />
                                </ProtectedRoute>
                            } />
                            <Route path="/read" element={
                                <ProtectedRoute>
                                    <ReadPost />
                                </ProtectedRoute>
                            } />
                            <Route path="/" element={<Navigate to="/dashboard" replace />} />
                        </Route>
                            <Route path="*" element={<div>404 Not Found</div>} /> {/* 모든 불일치 경로 처리 */}
                    </Routes>
                </AuthProvider>
            </HashRouter>
        </>
    )
}

export default App
