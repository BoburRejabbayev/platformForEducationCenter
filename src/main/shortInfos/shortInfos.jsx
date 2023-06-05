import React from 'react';
import './shortInfos.scss'
import { BiBook, BiBrain } from 'react-icons/bi';
import { AiOutlinePaperClip } from 'react-icons/ai';

const ShortInfos = () => {
    return (
        <div className='short_infos'>
            <div className="short_infos-main container">
                <div className="over">
                    <BiBook fontSize={'80px'} color='white' />
                    <div className="txt">
                        <h3>Over 155,000</h3>
                        <p>Video courses on career skills</p>
                    </div>
                </div>
                <div className="choose">
                    <BiBrain fontSize={'80px'} color='white' />
                    <div className="txt">
                        <h3>Choose from</h3>
                        <p>Top industry instructors</p>
                    </div>
                </div>
                <div className="life_time">
                    <AiOutlinePaperClip fontSize={'80px'} color='white'  />
                    <div className="txt">
                        <h3>Lifetime access</h3>
                        <p>On mobile and desktop</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShortInfos;