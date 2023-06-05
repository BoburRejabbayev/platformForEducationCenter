import React, { useEffect, useState } from 'react';
import './headerInfo.scss'

const HeaderInfo = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        let main = document.getElementById('main')
        // console.log(main);
        const handleMouseMove = (event) => {
            setPosition({ x: -event.clientX * 0.01, y: -event.clientY * 0.01 });
        };
        main.addEventListener('mousemove', handleMouseMove);

        return () => {
            main.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div className='header_info' >
            <div className="main container" id='main'>
                <div className="header_info-txt">
                    <h3>DEVELOPED BY TO TEACHERS</h3>
                    <h1>Experience a learning platform that take you next level</h1>
                    <p>World-class training and development programs developed by top teachers</p>
                    <button>Explore All Courses</button>
                </div>
                <div className="header_info-images">
                    <img src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HR0835.jpg" alt="" className="img1" />
                    <img src="https://thepixelcurve.com/wp/lmsmart/lp/wp-content/uploads/sites/2/2022/02/HTR084.jpg" alt="" className="img2" />
                    <div className="img_others" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
                        <div className="dots">
                            <div className="rows row1">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                            <div className="rows row2">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                            <div className="rows row3">

                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                            <div className="rows row4">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderInfo;