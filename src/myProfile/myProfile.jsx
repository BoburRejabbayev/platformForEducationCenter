import React from 'react';
import './myProfile.scss'
import { BiBookAlt } from 'react-icons/bi';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import { HiUserGroup } from 'react-icons/hi';
import { AiOutlineBook, AiOutlineSchedule } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogin } from '../slices/profileSlice';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const { user, closeUser } = useSelector((state) => state.userSlice);
    const dispatch = useDispatch()
    const [activeButton, setActiveButton] = React.useState('button1');
    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    function logingOut() {
        // alert('Success')
        dispatch(setIsLogin(false))
    }

    const renderSecondColumnContent = () => {
        if (activeButton === 'button1') {
            return <p>Здесь будет отображаться курсы</p>;
        }
        if (activeButton === 'button2') {
            return <p>Здесь будет отображаться Тесты</p>;
        }
        if (activeButton === 'button3') {
            return <p>Здесь будет отображаться Мои группы</p>;
        }
        if (activeButton === 'button4') {
            return <p>Здесь будет отображаться Расписание</p>;
        }
        if (activeButton === 'button5') {
            return <p>Здесь будет отображаться Настройки</p>;
        }
        if (activeButton === 'button6') {
            alert("Seccess")
            // return <p>button 4</p>;
        }


        return null;
    };




    return (
        <div className='my_profile'>
            <div className="container">
                <div className="profile_photo">
                    <div className="profile_img">
                        <img src="https://secure.gravatar.com/avatar/ebde1b53cf9c74826622bb0ae5fbaa23?s=250&d=mm&r=g" alt="" />
                    </div>
                    <h1> - {user.name} - { } </h1>
                    {/* <button className='profil_logout' onClick={settingIsLogin} ><BiBookAlt className='icon' fontSize={'24px'} />LogOut</button> */}

                </div>
            </div>
            <div className="container profile_courses">
                <div className="two-column-container">
                    <div className="column">
                        <div className="buttons-column">
                            {/* <button className={activeButton === 'button1' ? 'active' : ''} onClick={() => handleButtonClick('button1')}  >Button 1</button> */}
                            <button className={activeButton === 'button1' ? 'active' : ''} onClick={() => handleButtonClick('button1')}><BiBookAlt className='icon' fontSize={'24px'} />Курсы</button>
                            <button className={activeButton === 'button2' ? 'active' : ''} onClick={() => handleButtonClick('button2')}><AiOutlineBook className='icon' fontSize={'24px'} />Тесты</button>
                            {user.type === 'teacher' && <button className={activeButton === 'button3' ? 'active' : ''} onClick={() => handleButtonClick('button3')}><HiUserGroup className='icon' fontSize={'24px'} />Мои группы</button>}
                            <button className={activeButton === 'button4' ? 'active' : ''} onClick={() => handleButtonClick('button4')}><AiOutlineSchedule className='icon' fontSize={'24px'} />Расписание</button>
                            <button className={activeButton === 'button5' ? 'active' : ''} onClick={() => handleButtonClick('button5')}><FiSettings className='icon' fontSize={'24px'} />Настройки</button>
                            <button className={activeButton === 'button6' ? 'active' : ''} onClick={() => handleButtonClick('button6')}><FiLogOut className='icon' fontSize={'24px'} /><Link onClick={logingOut} to="/login">Выйти</Link></button>
                        </div>
                    </div>
                    <div className="column content_collumn">{renderSecondColumnContent()}
                        <BsFillBookmarkFill className='icon_bookmark' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;