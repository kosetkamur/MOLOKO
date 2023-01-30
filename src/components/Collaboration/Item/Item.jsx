import React, {useState} from 'react';
import arrow from "../../../media/img/arrow.svg";
import Cooperation from "../Cooperation/Cooperation";
import Collaboration from "../Collaboration";
import CollaborationItem from "../CollaborationItem/CollaborationItem";

const Item = ({cooperation, types}) => {
    const [ list, setList ] = useState(true);
    console.log(cooperation)
    return (
        <div className="drop-down_item" onClick={ ()=> setList(e => !e) }>
            <div className="drop-down_item__title">
                <h4>{types.cooperation.title}</h4>
                <img src={arrow} alt="стрелочка" className={ list ? 'image imgRotate' : 'image' } />
            </div>

            <div className="drop-down_item__list">
                {
                    cooperation.map((item, index) => <CollaborationItem data={item} index={index} />)
                }
            </div>
        </div>
    );
};

export default Item;