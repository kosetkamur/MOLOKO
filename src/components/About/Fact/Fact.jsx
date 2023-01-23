import React from 'react';

const Fact = ({ fact }) => {
    return (
        <div className="facts__item">
            <p className="facts__item_num num1" data-num="5">{ fact.number }</p>
            <p className="facts__item_text">{ fact.title }</p>
        </div>
    );
};

export default Fact;