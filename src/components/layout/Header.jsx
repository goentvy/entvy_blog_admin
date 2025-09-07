import { useAuth } from '../../store/auth';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { signOut } from '../../store/hook';

function Header() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut();
        logout();
        navigate('/login');
    }
    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center">
                    <button className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <i data-feather="menu" className="w-6 h-6"></i>
                    </button>
                    <h2 className="ml-4 text-2xl font-semibold text-gray-800" id="page-title">Entvy</h2>
                </div>
                
                <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <i data-feather="bell" className="w-6 h-6"></i>
                    </button>
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">관</span>
                        </div>
                        <span className="text-gray-700 font-medium">{user?.username}</span>
                        { user ? 
                            <Button onClick={handleLogout} variant="danger">로그아웃</Button> : 
                            <Button variant="primary" href="/entvy_blog_admin/login">로그인</Button>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;