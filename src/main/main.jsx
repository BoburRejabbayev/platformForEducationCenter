import React from 'react';
import ShortInfos from './shortInfos/shortInfos';
import Topics from './topics/topics';
import Masters from './masters/masters';
import SendForm from '../form/sendForm';

const Main = () => {
    return (
        <div>
            <ShortInfos />
            <Topics />
            <Masters />
            <iframe id='location' title='education-center' className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39127.18402946273!2d0.0787878135380256!3d52.19888753469367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d85d89f32a012d%3A0x63a320e1a35e3d21!2z0JrQtdC80LHRgNC40LTQtiwg0JLQtdC70LjQutC-0LHRgNC40YLQsNC90LjRjw!5e0!3m2!1sru!2s!4v1685872179498!5m2!1sru!2s" />
            <SendForm />
        </div>
    );
};

export default Main;