import React, {useEffect, useState} from 'react';
import Slider from "react-slick";

import './News.sass'
import New from "./New/New";
import NewPopup from "../NewPopup";
import GetData from "../../api/getData";

const News = () => {

    const [ article, setArticle ] = useState(false);
    const [ temp, setTemp ] = useState({});
    const [ news, setNews ] = useState('');

    useEffect(() => {
        GetData.getNews().then(resp => {
            setNews(resp);
        });
    }, []);


    const openArticle = ( data ) => {
        setArticle(true)
        setTemp(data)
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
        autoplaySpeed: 2000,
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
                autoplaySpeed: 2000,
            }
            },
            {
                breakpoint: 650,
                    settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
            },

        ]
    };
    return (
        <div id="news">
            { article && <NewPopup  data={ temp } handleClose={ () => setArticle(false) } /> }
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

export default React.memo(News);