import React from 'react';
import './footer.scss'
import { BsInstagram } from 'react-icons/bs';
import { FaTelegramPlane, FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="container footer_main">
                <div className="logo">
                    <img src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2021/12/2x_logo-white.png" alt="" />

                    <div className="logo_txt">
                        <p>
                            Эта платформа разработана для учебных центров
                        </p>
                        <div className="links">
                            <a href='https://www.instagram.com/'>
                                <div className="footer_link instagram">
                                    <BsInstagram className='icon' />
                                </div>
                            </a>
                            <a href='https://t.me/+998887882288'>
                                <div className="footer_link telegram">
                                    <FaTelegramPlane className='icon' />
                                </div>
                            </a>
                            <a href='https://www.facebook.com/'>
                                <div className="footer_link facebook">
                                    <FaFacebookF className='icon' />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <ul className='nav_list'>
                    <h1>Navigation</h1>
                    <li><a href='#home' className="nav_links">Home</a></li>
                    <li><a href="#courses" className="nav_links">Courses</a></li>
                    <li><a href="#location" className="nav_links">Location</a></li>
                    <li><a href="#footer" className="nav_links">Contacts</a></li>
                </ul>
                <div className="contacts">
                    <h1>Contact us</h1>
                    <a href="tel:+998887882288">+998887882288</a>
                    <a href="tel:+998935336454">+998935336454</a>
                    <a href="mailto:@rejabbayevbobur22092001">@rejabbayevbobur22092001</a>
                </div>
            </div>
            <div className="project_about container"><p>© This platform for education center maded by Rejabbayev Bobur</p></div>
        </div>
    );
};

export default Footer;