import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import '../../styles/scss/BlogPosts.scss'
import { useState, useEffect } from 'react'
import { getData, deletePost, DateFilter } from '../../store/hook'
import { useNavigate } from 'react-router-dom'

function BlogPosts() {
    const navigate = useNavigate();
    const [ postList, setPostList ] = useState([]);

    useEffect(() => {
        getData(setPostList, 'post');
    }, [])

    function modifyPost(post) {
        navigate('/post', { state: { postData: post }});
    }
    function readPost(post) {
        navigate('/read', { state: {postData: post}});
    }

    return (
        <div className="blogPosts_wrap">
            <div className="posts_title">
                <span>Blog Posts</span>
                <Button href="/entvy_blog_admin/#post"><i className="bi bi-sticky"></i>글쓰기</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Create_at</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {postList.map(post => (
                    <tr key={post.id} onClick={() => readPost(post)}>
                        <td>{post.id}</td>
                        <td>{post.category}</td>
                        <td>{post.title}</td>
                        <td>{post.content}</td>
                        <td>{DateFilter(post.created_at)}</td>
                        <td>
                            <Button id={post.id} onClick={(e) => { e.stopPropagation(); modifyPost(post)}} variant="warning">수정</Button>
                            <Button id={post.id} onClick={(e) => { e.stopPropagation(); deletePost(post.id, 'post')}} variant="danger">삭제</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default BlogPosts;