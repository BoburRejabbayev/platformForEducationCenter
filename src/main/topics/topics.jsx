import React from 'react';
import './topics.scss'
import frontend from '../../sources/img/frontend.png'
import english from '../../sources/img/english.png'
import figma from '../../sources/img/figma.png'
import java from '../../sources/img/java.png'
import math from '../../sources/img/math.png'
import physics from '../../sources/img/physics.png'
import python from '../../sources/img/python.png'
import russian from '../../sources/img/russian.png'


const Topics = () => {
    return (
        <div className='topics' id='courses'>
            <div className="topics_title container">
                <h1>Featured topics by category</h1>
                <button>Explore More</button>
            </div>
            <div className="container topics_elements">
                <div className="topic frontend">
                    <img src={frontend} alt="" />
                    <p>FrontEnd</p>
                </div>
                <div className="topic backend">
                    <img src={java} alt="" />
                    <p>BackEnd(Java)</p>
                </div>
                <div className="topic python">
                    <img src={python} alt="" />
                    <p>Python</p>
                </div>
                <div className="topic english">
                    <img src={english} alt="" />
                    <p>English</p>
                </div>
                <div className="topic russian">
                    <img src={russian} alt="" />
                    <p>Russian</p>
                </div>
                <div className="topic math">
                    <img src={math} alt="" />
                    <p>Math</p>
                </div>
                <div className="topic physics">
                    <img src={physics} alt="" />
                    <p>Physics</p>
                </div>
                <div className="topic web-designer">
                    <img src={figma} alt="" />
                    <p>web-designer</p>
                </div>
            </div>
        </div>
    );
};

export default Topics;