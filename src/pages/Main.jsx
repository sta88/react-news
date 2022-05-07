import React, {useContext}  from "react";
import {AuthContext} from '../App';
import {AdminContext} from '../App';

function Main() {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {isAdmin, setIsAdmin} = useContext(AdminContext);

    return (
        <div className="wrapper">
            <h1>Привет, {isAuth ? (isAdmin ? 'Admin' : 'User') : 'Гость'}</h1>
        </div>
    )
};

export default Main;