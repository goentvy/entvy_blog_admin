import { useContext, createContext } from "react";

// 인증 컨텍스트 생성
export const AuthContext = createContext();

// 인증 훅
export function useAuth() {
    return useContext(AuthContext);
}