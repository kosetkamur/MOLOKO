import React, {useEffect, useState} from 'react';

import './Provider.sass'

import Requirements from "./Requirements/Requirements";
import GetRequirements from "../../api/getRequirements";

const Provider = () => {
    const [ requirement, setRequirement ] = useState([]);

    useEffect(() => {
        GetRequirements.GetRequirement().then(resp => {
            setRequirement(resp);
        });
    }, []);

    return (
        <div className="provider">
            <div className="container">
                <div className="wrapper">
                    <div className="line"></div>
                    <div className="title">
                        <h3>
                            Требования к
                        </h3>
                        <h2>
                            Поставщикам и<br />
                            производителям
                        </h2>
                    </div>
                    <div className="requirements">
                        {
                            requirement.map((item, index) => <Requirements requirement={ item } index={ index+1 } key={ index }/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Provider);