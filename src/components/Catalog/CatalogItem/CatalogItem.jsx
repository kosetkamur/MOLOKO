import React from 'react';

const CatalogItem = ({ catalog }) => {

    let product = catalog.product_list;
    console.log(catalog.icon)

    return (
        <div className="catalog__items_item">
            <div className="catalog__items_item__image">
                <img src={ 'http://zinchi5d.beget.tech'+catalog.icon } />
            </div>
            <div className="catalog__items_item__subscribe">
            <h4>{ catalog.title }</h4>
                {
                    (typeof product == 'object') ? product.map((data, index) => <p key={ index }>{ data.title }</p>) : ""
                }
            </div>
        </div>
    );
};

export default CatalogItem;