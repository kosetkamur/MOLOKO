import React from 'react';

import './Contacts.sass'
import {useEffect, useState} from "react";
import GetContacts from "../../api/getContacts";
import Contact from "./Contact/Contact";

const Contacts = () => {
    const [ contacts, setContacts ] = useState([]);

    useEffect(() => {
        GetContacts.GetNumbers().then(resp => {
            setContacts(resp);
        });
    }, []);

    return (
        <div id="contacts">
            <div className="container">
                <div className="contacts">
                    { (typeof contacts === 'object') ? contacts.map(contact => <Contact contact={contact}/>) : ''}
                </div>
                <p className="footer">
                    ООО «МОЛОКО»
                </p>
            </div>
        </div>
    );
};

export default React.memo(Contacts);