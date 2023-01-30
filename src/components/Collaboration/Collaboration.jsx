import React from 'react';

import './Collaboration.sass'
import Cooperation from "./Cooperation/Cooperation";
import Payment from "./Payment/Payment";
import Delivery from "./Delivery/Delivery";

const Collaboration = () => {

    //
    // const [ cooperation, setCooperation ] = useState({});
    //
    // const types = {
    //     cooperation: {
    //         title: 'Условия сотрудничества',
    //     },
    //     delivery: {
    //         title:  'Условия оплаты',
    //     },
    //     payment: {
    //         title: 'Доставка',
    //     },
    // }
    //
    // useEffect(() => {
    //     for (let key in types){
    //         const fetch = async() => {
    //             try{
    //                 let url = 'http://zinchi5d.beget.tech/api/cooperation.terms?type='+key;
    //                 let getData = await axios.get(url);
    //                 return getData.data.data;
    //             } catch (e) {
    //                 alert(e)
    //             }
    //         }
    //         fetch().then(res => setCooperation({ ...cooperation, [key]: res }))
    //     }
    // },[]);
    // console.log(cooperation)

    return (
        <section className="collaboration" id="collaboration">
            <div className="container">
                <div className="title">
                    <h3>
                        условия
                    </h3>
                    <h2>
                        сотрудничества
                    </h2>
                </div>
                <div className="accordion">
                    <section>
                        <input type="checkbox" className="accordion__checkbox" id="accordion-heading-1" />
                        <label className="accordion__heading" htmlFor="accordion-heading-1">Условия сотрудничества</label>
                        <div className="accordion__content">
                            <Cooperation />
                        </div>
                    </section>
                    <section>
                        <input type="checkbox" className="accordion__checkbox" id="accordion-heading-2" />
                        <label className="accordion__heading" htmlFor="accordion-heading-2">Условия оплаты</label>
                        <div className="accordion__content">
                            <Payment />
                        </div>
                    </section>
                    <section>
                        <input type="checkbox" className="accordion__checkbox" id="accordion-heading-3" />
                        <label className="accordion__heading" htmlFor="accordion-heading-3">Доставка</label>
                        <div className="accordion__content">
                            <Delivery />
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Collaboration);