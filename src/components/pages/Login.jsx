import '../../styles/scss/Login.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
    const navigate = useNavigate();
    const [ id, setId ] = useState('');
    const [ pwd, setPwd ] = useState('');

    function login(e) {
        e.preventDefault();
        if(id === '' || pwd === '') {
            return console.log('id or password value null');
        } else if(id === import.meta.env.VITE_ADMIN_ID && pwd === import.meta.env.VITE_ADMIN_PWD) {
            navigate('/entvy_blog_admin/');
        } else {
            return console.log('id && pwd not equals');
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2><i className="fas fa-shield-alt me-2"></i>관리자 로그인</h2>
                    <p>관리자 계정으로 시스템에 접근하세요</p>
                </div>
                
                <div className="login-body">
                    <div className="alert-demo">
                        <i className="fas fa-info-circle me-2"></i>테스팅중입니다.
                    </div>
                    
                    <form id="loginForm">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="id" placeholder="이메일 주소" onChange={(e) => setId(e.target.value)} required />
                            <label htmlFor="id">계정명</label>
                        </div>
                        
                        <div className="form-floating">
                            <input type="password" className="form-control" id="password" placeholder="비밀번호" onChange={(e) => setPwd(e.target.value)} required />
                            <label htmlFor="password">비밀번호</label>
                        </div>
                        
                        <button type="submit" className="btn btn-login" onClick={login}>
                            <i className="fas fa-sign-in-alt me-2"></i>로그인
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;