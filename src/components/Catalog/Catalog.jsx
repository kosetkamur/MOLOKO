import React, {useEffect, useState} from 'react';

import './Catalog.sass'
import GetCatalog from "../../api/getCatalog";
import CatalogItem from "./CatalogItem/CatalogItem";
import FormPopup from "./FormPopup";

const Catalog = () => {

    const [ catalog, setCatalog ] = useState('');
    const [ show, setShow ] = useState(false);

    useEffect(() => {
        GetCatalog.GetItems().then(res => {
            setCatalog(res);
        });
    }, []);

    return (
        <div id="catalog">
            { show && <FormPopup handleClose={ () => setShow(false) } />}
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
                <div className="catalog__button">
                    <button onClick={ () => setShow(true) }>
                        Запросить прайс-лист
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Catalog;