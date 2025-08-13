import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import '../../styles/scss/ReadPost.scss'

function ReadPost() {
    const location = useLocation();
    const [ post, setPost ] = useState('');

    useEffect(() => {
        if(location) {
            setPost(location.state.postData);
        }
    }, [location])

    return (
        <div className="read_wrap">
            <MDEditor.Markdown source={post.content} style={{whiteSpace: 'pre-wrap'}} />
        </div>
    );
}

export default ReadPost;