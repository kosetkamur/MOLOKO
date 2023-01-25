import React from 'react';

const Requirements = ({ requirement, index }) => {
    return (
        <>
            <div className="requirements__item">
                <div className="requirements__item_circle">
                    { index }
                </div>
                <p className="requirements__item_text">
                    { requirement.title }
                </p>
            </div>
        </>
    );
};

export default Requirements;