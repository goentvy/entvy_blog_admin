import { useState, useEffect } from "react";
import { AuthContext } from "../../store/auth";

// 인증 프로바이더 컴포넌트
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 로컬 스토리지에서 사용자 정보 확인
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = (username, password) => {
        // 간단한 로그인 검증 (실제로는 API 호출)
        if (username === import.meta.env.VITE_ADMIN_ID && password === import.meta.env.VITE_ADMIN_PWD) {
            const userData = { username, id: 1 };
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}