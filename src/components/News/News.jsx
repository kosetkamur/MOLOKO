import React, {useEffect, useState} from 'react';
import Slider from "react-slick";

import './News.sass'
import New from "./New/New";
import NewPopup from "../NewPopup";

const News = ({ news }) => {

    const [ article, setArticle ] = useState(false);
    const [ temp, setTemp ] = useState({});


    const openArticle = ( data ) => {
        setArticle(true)
        setTemp(data)
    }

    const handleClose = () => {
        setArticle(false)
    }

    useEffect(() => {
        let body = document.querySelector('body');
        if(article===true){
            body.className = 'no-scroll'
        } else {
            body.classList.remove('no-scroll');
        }
    }, [article])

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
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
                dots: false,
                autoplay: true,
                autoplaySpeed: 1500,
            }
            },
            {
                breakpoint: 950,
                    settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                autoplay: true,
                autoplaySpeed: 1500,
            }
            },
            {
                breakpoint: 768,
                    settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                autoplay: true,
                autoplaySpeed: 1500,
            }
            },
            {
                breakpoint: 650,
                    settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                autoplay: true,
                autoplaySpeed: 1500,
            }
            },
            {
                breakpoint: 310,
                    settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                autoplay: true,
                autoplaySpeed: 1500,
            }
            },
        ]
    };
    return (
        <div id="news">
            { article && <NewPopup  data={ temp } handleClose={ handleClose } /> }
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
                    {
                        (typeof news == 'object') ? news.map(data => <New data={ data } key={ data.title } openArticle={ openArticle } />) : ""
                    }
                </Slider>
            </div>
        </div>
    );
};

export default News;