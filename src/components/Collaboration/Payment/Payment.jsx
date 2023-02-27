import React, {useEffect, useState} from 'react';
import axios from "axios";
import CollaborationItem from "../CollaborationItem/CollaborationItem";

const Payment = () => {
    const [ content, setContent ] = useState('');

    useEffect(() => {
        const fetch = async() => {
            try{
                let url = 'https://ooomlk.ru/api/cooperation.terms?type=payment';
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
        <>
            {
                (typeof content == 'object') ? content.map((item, index) => <CollaborationItem data={ item } key={ index } index={ index+1 } />) : ""
            }
        </>
    );
};

export default Payment;
