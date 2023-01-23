import React, {useEffect, useState} from 'react';

import './Catalog.sass'
import GetCatalog from "../../api/getCatalog";
import CatalogItem from "./CatalogItem/CatalogItem";

const Catalog = () => {

    const [ catalog, setCatalog ] = useState('');

    useEffect(() => {
        GetCatalog.GetItems().then(resp => {
            setCatalog(resp);
            console.log(resp)
        });
    }, []);

    return (
        <div id="catalog">
            <div className="container">
                <div className="title">
                    <h3>
                        наши товары
                    </h3>
                    <h2>
                        Каталог
                    </h2>
                </div>
                <div className="catalog__items">
                    {
                        (typeof catalog == 'object') ? catalog.map((item, index) => <CatalogItem catalog={ item } key={ index } />) : ""
                    }
                </div>
            </div>
        </div>
    );
};

export default Catalog;