import React, {useContext, useState} from 'react';
import Input from './Input';
import Button from './Button';
import {AuthContext} from '../App';
import {AdminContext} from '../App';

const LoginForm = ({visible, setVisible}) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const {isAdmin, setIsAdmin} = useContext(AdminContext);
    const [loginError, setLoginError] = useState(false);
    const [user, setUser] = useState({login: '', password: ''});
    const [userData, setUserData] = useState([
        {login: 'user', password: 'user'},
        {login: 'admin', password: 'admin'},
    ]);

    const Login = (e) => {
        e.preventDefault();

        for (let i=0; i < userData.length; i++) {
            if (userData[i].login === user.login && userData[i].password === user.password) {
                setIsAuth(true);
                localStorage.setItem('auth', 'true');
                setLoginError(false);
                i = userData.length + 1;
                setVisible(false);

                if (user.login === 'admin') {
                    setIsAdmin(true);
                    localStorage.setItem('admin', 'true');
                } else {
                    setIsAdmin(false);
                }
            } else {
                setLoginError(true);
            }
        }
        console.log(loginError);
    }

    return (
        <div>
            <form>
                <div>{loginError ? 'Введены неверные данные' : ''}</div>
                <Input
                    value={user.login}
                    onChange={e => setUser({...user, login: e.target.value})}
                    type="text"
                    placeholder="Логин"
                    name='login'
                />
                <Input
                    value={user.password}
                    onChange={e => setUser({...user, password: e.target.value})}
                    type="password"
                    placeholder="Пароль"
                    name='password'
                />
                <Button onClick={Login}>Войти</Button>
            </form>
        </div>
    );
};

export default LoginForm;