import React, {useEffect, useState} from 'react';
import axios from "axios";
import CollaborationItem from "../CollaborationItem/CollaborationItem";

const Cooperation = () => {

    const [ content, setContent ] = useState('');

    useEffect(() => {
        const fetch = async() => {
            try{
                let url = 'http://zinchi5d.beget.tech/api/cooperation.terms?type=cooperation';
                let getData = await axios.get(url);
                setContent(getData.data.data)
                return getData.data.data;
            } catch (e) {
                alert(e)
            }
        }
        fetch();
    },[]);

    return (
        <div className="cooperation">
            {
                (typeof content == 'object') ? content.map((item, index) => <CollaborationItem data={ item } key={ index } index={ index+1 } />) : ""
            }
        </div>
    );
};

export default Cooperation;