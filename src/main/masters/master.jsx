import React from 'react';
import { ShowMasterContext } from '../../App';

const Master = ({ datas, onclickAdd }) => {

    const { setShowMaster, setIfShow, openModal } = React.useContext(ShowMasterContext)


    const showInfos = (datas) => {
        setShowMaster(datas)
        setIfShow(true)
        // openModal()
    }

    return (
        <>
            <div className='master' onClick={() => showInfos(datas)} >
                <div className="master_photo">
                    <img src={datas.photo} alt="" />
                </div>
                <div className="master_main">
                    <h1>{datas.name}</h1>
                    <h3>{datas.job}</h3>
                </div>
            </div>
        </>
    );
};

export default Master;