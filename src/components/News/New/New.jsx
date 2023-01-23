import React from 'react';
import NewPopup from "../../NewPopup";

const New = ({ data, openArticle }) => {

    const openPopupNew = () => {
        openArticle(data);
    }

    return (
        <>
            <div className="news__items_item" onClick={ openPopupNew }>
                <h3>{ data.date }</h3>
                <h4>{ data.title }</h4>
                <p>{ data.body }</p>
            </div>
        </>
    );
};

export default New;