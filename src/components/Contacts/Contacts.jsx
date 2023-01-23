import React from 'react';

import './Contacts.sass'

const Contacts = () => {
    return (
        <div id="contacts">
            <div className="container">
                <div className="contacts">
                    <div className="contacts__item">
                        <h4>
                            Коммерческий отдел
                        </h4>
                        <div className="contacts__item_phone">
                            <div className="number">
                                <p>+7 (968) 944-44-16</p>
                            </div>
                            <div className="name">
                                <p>Екатерина</p>
                            </div>
                        </div>
                        <div className="contacts__item_phone">
                            <div className="number">
                                <p>+7 (963) 109-96-65</p>
                            </div>
                            <div className="name">
                                <p>Игорь</p>
                            </div>
                        </div>
                    </div>
                    <div className="contacts__item">
                        <h4>
                            Бухгалтерия
                        </h4>
                        <div className="contacts__item_phone">
                            <div className="number">
                                <p>+7 (999) 786-44-36  </p>
                            </div>
                            <div className="name">
                                <p>Наталья</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer">
                    ООО «МОЛОКО»
                </p>
            </div>
        </div>
    );
};

export default React.memo(Contacts);