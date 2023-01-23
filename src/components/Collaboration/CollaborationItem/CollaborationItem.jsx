import React from 'react';

const CollaborationItem = ({ data, index }) => {
    return (
        <div className="list_item">
            <div className="list_item__circle">
                { index }
            </div>
            <p>
                { data.term }
            </p>
        </div>
    );
};

export default CollaborationItem;