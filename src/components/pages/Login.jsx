import '../../styles/scss/Login.scss'
import { useState } from 'react'
import { useAuth } from '../../store/auth';
import { useNavigate, useLocation } from 'react-router-dom'
import { signInWithGithub } from '../../store/hook';


function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();
    const [ id, setId ] = useState('');
    const [ pwd, setPwd ] = useState('');
    const [ error, setError ] = useState('');

    const from = location.state?.from?.pathname || '/';
    console.log(location);

    function handleLogin(e) {
        e.preventDefault();
        setError('');

        if(login(id, pwd)) {
            signInWithGithub();
            // navigate(from, { replace: true});
            console.log(from);
        } else {
            setError('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h2><i className="fas fa-shield-alt me-2"></i>관리자 로그인</h2>
                </div>
                
                <div className="login-body">
                    <div className="alert-demo">
                        <i className="fas fa-info-circle me-2"></i>관리자 계정으로 시스템에 접근하세요
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

                        {error && (
                            <div className="alert-demo">
                                <i className="fas fa-info-circle me-2"></i>{error}
                            </div>
                        )}
                        
                        <button type="submit" className="btn btn-login" onClick={handleLogin}>
                            <i className="fas fa-sign-in-alt me-2"></i>로그인
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;