import React, {useContext}  from "react";
import { useSelector } from 'react-redux';
import Slider from "../components/Slider";
// import {AuthContext} from '../App';
// import {AdminContext} from '../App';

function Main() {
    // const {isAuth, setIsAuth} = useContext(AuthContext);
    // const {isAdmin, setIsAdmin} = useContext(AdminContext);
    const isAuth = useSelector(state => state.isAuth);
    const isAdmin = useSelector(state => state.isAdmin);

    return (
        <div className="wrapper">
            <Slider />
            <h1>Привет, {isAuth ? (isAdmin ? 'Admin' : 'User') : 'Гость'}</h1>
        </div>
    )
};

export default Main;