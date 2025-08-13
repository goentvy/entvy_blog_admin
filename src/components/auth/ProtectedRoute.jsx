import { useAuth } from "../../store/auth";
import { useLocation, Navigate } from "react-router-dom";

// 보호된 라우트 컴포넌트
export default function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/entvy_blog_admin/login" state={{ from: location }} replace />;
    }

    return children;
}