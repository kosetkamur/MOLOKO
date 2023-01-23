import React from 'react';

const CatalogItem = ({ catalog }) => {

    let product = catalog.product_list;

    return (
        <div className="catalog__items_item">
            <h4>{ catalog.title }</h4>
            {
                (typeof product == 'object') ? product.map((data, index) => <p key={ index }>{ data.title }</p>) : ""
            }
        </div>
    );
};

export default CatalogItem;