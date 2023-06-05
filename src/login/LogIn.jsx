import React from 'react';
import './logIn.scss'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import profiles from '../profiles.json'
import { addUser, setIsLogin } from '../slices/profileSlice';
import { useDispatch, useSelector } from 'react-redux';

const LogIn = () => {
    const { isLogin } = useSelector((state) => state.userSlice);



    const [nameValue, setNameValue] = React.useState('');
    const [passwordValue, setPasswordValue] = React.useState('');
    const [loginStatus, setLoginStatus] = React.useState(true)

    const NameChange = (event) => {
        setLoginStatus(true)
        setNameValue(event.target.value);
    };
    const PasswordChange = (event) => {
        setLoginStatus(true)
        setPasswordValue(event.target.value);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogin = () => {
        const onlineUser = profiles.find(el => el.username === nameValue)
        const error = document.getElementById('error')
        setLoginStatus(false)
        if (onlineUser && onlineUser.password === passwordValue) {
            dispatch(addUser(onlineUser))
            dispatch(setIsLogin(true))
            console.log(error);
            navigate('/myProfile')
            setLoginStatus(true)
        }

    };


    // if (!isLogin) return <div>Please log in to view the profile.</div>;

    return (
        <>
            <div className="form">
                <div className="form__content">
                    <h1>Личный кабинет</h1>
                    <div className="form__box">
                        <input value={nameValue} onChange={NameChange} type="text" className="form__input" placeholder="Enter Name" />
                        <label for="" className="form__label">ENTER NAME</label>
                        <div className="form__shadow"></div>
                    </div>
                    <div className="form__box">
                        <input value={passwordValue} onChange={PasswordChange} type="password" className="form__input" placeholder="Enter Password" />
                        <label for="" className="form__label">ENTER PASSWORD</label>
                        <div className="form__shadow"></div>
                    </div>
                    {!loginStatus &&
                        <p id='error' className="error">Пароль или Логин не правильно</p>
                    }
                    <div className="form__button" onClick={handleLogin}>
                        <Link to={!isLogin ? '/login' : '/myProfile'}>
                            <input type="Submit" className="form__submit" />
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default LogIn;