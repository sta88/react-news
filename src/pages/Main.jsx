import React, {useContext}  from "react";
import { useSelector } from 'react-redux';
import Slider from "../components/Slider";
import SlickSlider from "../components/SlickSlider";
// import {AuthContext} from '../App';
// import {AdminContext} from '../App';

function Main() {
    // const {isAuth, setIsAuth} = useContext(AuthContext);
    // const {isAdmin, setIsAdmin} = useContext(AdminContext);
    const isAuth = useSelector(state => state.isAuth);
    const isAdmin = useSelector(state => state.isAdmin);

    return (
        <div className="wrapper">
            {/* <Slider /> */}
            <SlickSlider />
            <h1>Привет, {isAuth ? (isAdmin ? 'Admin' : 'User') : 'Гость'}</h1>
            <p>
                <b>Зарегистрированный пользователь: user/user</b><br />
                Можно добавить новость и отправить ее на модерацию.
            </p>
            <p>
                <b>Администратор: admin/admin</b><br />
                Можно добавить, удалить новость, одобрить новость со статусом "На модерации".
            </p>
        </div>
    )
};

export default Main;