import React from 'react';
import data from '../../masters.json'
import Master from './master';
import './masters.scss'

const Masters = () => {

    return (
        <div className=' container masters'>
            <div className="masters-title">
                <h1><span className='masters-title-txt'>Popular</span> mentors</h1>
            </div>
            <div className="teachers">
                {data.map(el => <Master datas={el} key={el.id} />)}
            </div>
        </div>
    );
};

export default Masters;