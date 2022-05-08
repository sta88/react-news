import React, {createContext, useState, useEffect} from "react";
import './index.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import News from './pages/News'
import Main from "./pages/Main";

export const AuthContext = createContext(false);
export const AdminContext = createContext(false);

function App() {
    // const [isAuth, setIsAuth] = useState(false);
    // const [isAdmin, setIsAdmin] = useState(false);

    // useEffect(() => {
    //     if (localStorage.getItem('auth')) {
    //         setIsAuth(true)
    //     }
    // }, []);

    return (
        // <AuthContext.Provider value={{isAuth, setIsAuth}}>
        //     <AdminContext.Provider value={{isAdmin, setIsAdmin}}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route index element={<Main />} />
                        <Route path="/news" element={<News />} />
                        {/* <Route path="*" element={<News />} /> */}
                    </Routes>
                </BrowserRouter>
        //     </AdminContext.Provider>
        // </AuthContext.Provider>
    )
}

export default App;