import React, {useContext, useState} from "react";
import Modal from "../components/Modal";
import LoginForm from "./LoginForm";
import {Link} from 'react-router-dom';
// import {AuthContext} from '../App';
// import {AdminContext} from '../App';
import { useDispatch, useSelector } from 'react-redux';

function Header () {
    const [modal, setModal] = useState(false);
    // const {isAuth, setIsAuth} = useContext(AuthContext);
    // const {isAdmin, setIsAdmin} = useContext(AdminContext);
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.isAuth);
    const isAdmin = useSelector(state => state.isAdmin);

    const Logout = () => {
        // setIsAuth(false);
        // setIsAdmin(false);
        dispatch({type: "Logout", payload: ''});
    }

    return (
        <div className="wrapper">
            <header className="header">
                <div className="header__logo">
                    <Link to="/">
                        <img src="images/logotip.svg" alt="Logotip" />
                    </Link>
                </div>
                <div className="header-links">
                    <div className="header-links__item"><Link to="/news">Новости</Link></div>
                    { isAuth ?
                        <div className="header-links__item" onClick={Logout}>Выход</div>
                        :
                        <div className="header-links__item" onClick={() => setModal(true)}>Вход</div>
                    }
                </div>
            </header>
            <Modal visible={modal} setVisible={setModal}>
                <h3>Введите ваши данные</h3>
                <LoginForm setVisible={setModal}/>
            </Modal>
        </div>
    )
};

export default Header;