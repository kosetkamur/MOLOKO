import React from 'react';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import './Map.sass';
import Connection from "./Connection/Connection";

const Maps = () => {
    const defaultState = {
        center: [55.726320, 37.399399],
        zoom: 10,
    };
    return (
        <div className="map">
            <Connection />
            <div className="ymap">
                <YMaps>
                    <Map defaultState={defaultState}>
                        <Placemark geometry={[55.726320, 37.399399]} />
                    </Map>
                </YMaps>
            </div>
        </div>
    );
};


export default Maps;

