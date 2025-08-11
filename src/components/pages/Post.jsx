import { useState } from 'react'
import MDEditor from '@uiw/react-md-editor'
import { Button, Form, InputGroup } from 'react-bootstrap'
import '../../styles/scss/Post.scss'
import { useNavigate } from 'react-router-dom';
import { InsertSubmit } from '../../store/hook'

function Post() {
    const navigate = useNavigate();
    const [ category, setCategory ] = useState("html");
    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");

    async function postSubmit(e) {
        e.preventDefault();
        if(category === '' || title === '' || content === '') {
            return console.log('category or title or content text null');
        }
        InsertSubmit({category, title, content}, 'post');
        navigate('/');
    }
    

    return (
        <div className="post_wrap">
            <Form.Select aria-label="Default select example" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JavaScript</option>
                <option value="react">React</option>
                <option value="figma">Figma</option>
            </Form.Select>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                Title
                </InputGroup.Text>
                <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </InputGroup>
            <MDEditor 
                value={content}
                onChange={setContent}
                preview="edit"
                textareaProps={{
                    placeholder: 'Plase enter markdown text'
                }}
            />
            <div className="post_btn">
                <Button onClick={() => alert(content)}>MarkDown 작성내용보기</Button>
                <Button type="submit" variant="primary" onClick={postSubmit}>보내기</Button>
                <Button variant="warning" onClick={() => navigate(-1)}>뒤로가기</Button>
            </div>
            {/* <MDEditor.Markdown source={value} style={{whiteSpace: 'pre-wrap'}} /> */}
        </div>
    );
}

export default Post;