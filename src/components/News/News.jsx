import React from 'react';
import Slider from "react-slick";

import './News.sass'

const News = ({ news }) => {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1025,
                    settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                autoplay: false,
                autoplaySpeed: 1500,
            }
            },
            {
                breakpoint: 600,
                    settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                autoplay: false,
                autoplaySpeed: 1500,
            }
            },
        ]
    };
    console.log(news)
    return (
        <div id="news">
            <div className="container">
                <div className="news__title title">
                    <h3>
                        важные
                    </h3>
                    <h2>
                        Новости
                    </h2>
                </div>
            </div>

            <div className="news__items">
                <Slider {...settings}>
                    <div className="news__items_item">
                        <h3>12.07.2022</h3>
                        <h4>«Светофор» открыли более 1100 магазинов</h4>
                        <p>
                            Основной партнер ООО «Молоко» сеть дискаунтеров «Светофор» за 2021 год открыла более 1100 магазинов, уступив по этому показателю только «Магниту» и X5 Group партнер ООО «Молоко» сеть «Молоко» сеть дискаунтеров «Светофор» за ООО «Молоко» сеть дискаунтеров «Светофор» за ООО «Молоко» сеть дискаунтеров
                        </p>
                    </div>
                    <div className="news__items_item">
                        <h3>12.07.2022</h3>
                        <h4>«Светофор» открыли более 1100 магазинов</h4>
                        <p>
                            Основной партнер ООО «Молоко» сеть дискаунтеров «Светофор» за 2021 год открыла более 1100 магазинов, уступив по этому показателю только «Магниту» и X5 Group партнер ООО «Молоко» сеть «Молоко» сеть дискаунтеров «Светофор» за ООО «Молоко» сеть дискаунтеров «Светофор» за ООО «Молоко» сеть дискаунтеров
                        </p>
                    </div>
                    <div className="news__items_item">
                        <h3>12.07.2022</h3>
                        <h4>«Светофор» открыли более 1100 магазинов</h4>
                        <p>
                            Основной партнер ООО «Молоко» сеть дискаунтеров «Светофор» за 2021 год открыла более 1100 магазинов, уступив по этому показателю только «Магниту» и X5 Group партнер ООО «Молоко» сеть «Молоко» сеть дискаунтеров «Светофор» за ООО «Молоко» сеть дискаунтеров «Светофор» за ООО «Молоко» сеть дискаунтеров
                        </p>
                    </div>
                    <div className="news__items_item">
                        <h3>12.07.2022</h3>
                        <h4>«Светофор» открыли более 1100 магазинов</h4>
                        <p>
                            Основной партнер ООО «Молоко» сеть дискаунтеров «Светофор» за 2021 год открыла более 1100 магазинов, уступив по этому показателю только «Магниту» и X5 Group партнер ООО «Молоко» сеть «Молоко» сеть дискаунтеров «Светофор» за ООО «Молоко» сеть дискаунтеров «Светофор» за ООО «Молоко» сеть дискаунтеров
                        </p>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default News;