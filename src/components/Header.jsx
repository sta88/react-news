import React, {useContext, useState} from "react";
import Modal from "../components/Modal";
import LoginForm from "./LoginForm";
import {Link} from 'react-router-dom';
import {AuthContext} from '../App';
import {AdminContext} from '../App';

function Header () {
    const [modal, setModal] = useState(false);
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {isAdmin, setIsAdmin} = useContext(AdminContext);

    const Logout = (e) => {
        setIsAuth(false);
        setIsAdmin(false);
        localStorage.setItem('auth', 'false');
    }
    
    let button;
    if (isAuth) {      
        button = <div className="header-links__item" onClick={Logout}>Выход</div>;    
    } else {      
        button = <div className="header-links__item" onClick={() => setModal(true)}>Вход</div>;    
    }

    return (
        <div className="wrapper">
            <header className="header">
                <div className="header__logo"><Link to="/">Logo</Link></div>
                <div className="header-links">
                    <div className="header-links__item"><Link to="/news">Новости</Link></div>
                    {button}
                </div>
            </header>
            <Modal visible={modal} setVisible={setModal}>
                <LoginForm setVisible={setModal}/>
            </Modal>
        </div>
    )
};

export default Header;