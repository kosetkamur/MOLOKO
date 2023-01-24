import React, {useEffect, useState} from 'react';
import axios from "axios";
import CollaborationItem from "../CollaborationItem/CollaborationItem";

const Delivery = () => {
    const [ content, setContent ] = useState('');

    useEffect(() => {
        const fetch = async() => {
            try{
                let url = 'http://zinchi5d.beget.tech/api/cooperation.terms?type=delivery';
                let getData = await axios.get(url);
                setContent(getData.data.data)
                return getData.data.data;
            } catch (e) {
                alert(e)
            }
        }
        fetch();
    },[]);
    console.log(content)
    return (
        <>
            {
                (typeof content == 'object') ? content.map((item, index) => <CollaborationItem data={ item } key={ index } index={ index+1 } />) : ""
            }
        </>
    );
};

export default Delivery;