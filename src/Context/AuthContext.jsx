import { createContext } from "react";

const AuthContext = createContext({
    auth: false,
    token: null,
    user: null,
    setAuthenticated: () => { }
});

export default AuthContext;