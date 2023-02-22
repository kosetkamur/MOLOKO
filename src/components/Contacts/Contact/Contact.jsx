import React from 'react';

const Contact = ({contact}) => {
    console.log(contact)
    return (
        <div className="contacts__item">
            <h4>
                { contact.department_name }
            </h4>
            {contact.contacts.map(val =>
                <div className="contacts__item_phone">
                    <div className="number">
                        <p>{val.number}</p>
                    </div>
                    <div className="name">
                        <p>{val.name}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;