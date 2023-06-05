import React from 'react';
import './nav.scss'
import { BsPerson } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogin } from '../../slices/profileSlice';


const Navbar = () => {
    const { isLogin } = useSelector((state) => state.userSlice)
    const [myLocation, setMyLoacation] = React.useState()

    const location = useLocation()

    React.useEffect(() => {
        setMyLoacation(location.pathname)
    }, [location.pathname])
    // console.log(myLocation);


    return (
        <div className='navbar ' id='home'>
            <div className="container">

                <Link to='/'> <div className="default_logo"><a href="#!"><img className="default_logo" src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/2x_logo.png" alt="logotype" width={'160px'} /></a></div></Link>
                <ul className='nav_list'>
                    <li><Link to="/" className="nav_links">Домой</Link></li>
                    {myLocation !== '/myProfile' &&
                        <>
                            <li><a href="#courses" className="nav_links">Курсы</a></li>
                            <li><a href="#location" className="nav_links">Локация</a></li>
                        </>
                    }
                    <li><a href="#footer" className="nav_links">Контакты</a></li>
                </ul>
                <div className="nav_others">
                    {/* <div className="search">
                        <input type="text" name="" id="" placeholder='Search' />
                        <div className="search_icon">
                            <FiSearch />
                        </div>
                    </div> */}
                    {/* <div className="shop">
                        <AiOutlineShoppingCart fontSize={'22px'} />
                    </div> */}



                    <Link to={isLogin ? '/myProfile' : '/login'} className="login">
                        <div  >
                            <BsPerson fontSize={'24px'} />
                            <p className="login_text">{isLogin ? 'MyProfile' : 'Login'}</p>
                        </div>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default Navbar;