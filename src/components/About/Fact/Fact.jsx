import React, {useEffect, useRef, useState} from 'react';

const Fact = ({ fact }) => {
    const containerRef = useRef(null);

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    };

    useEffect(()=>{
        let observer = new IntersectionObserver(NumberCount, options);
        if(containerRef.current) observer.observe(containerRef.current);
        return () => {
            if(containerRef.current) observer.observe(containerRef.current)
        }
    }, [])


    const [ num, setNum ] = useState(0);

    function NumberCount () {
        let step;
        let time = 2000;
        let temp = fact.number;
        let start=0;

        if(temp < 21) step = 1
        else if(temp > 21 && temp < 101) step = 10;
        else step = 200

        let t = Math.round(time/(num/step));

        let interval = setInterval(()=>{
            start += step;
            if(start === temp) {
                clearInterval(interval);
            }
            setNum(start)
        }, t)
    }


    return (
        <div className="facts__item" ref={containerRef}>
            <p className="facts__item_num">{ num }</p>
            <p className="facts__item_text">{ fact.title }</p>
        </div>
    );
};

export default React.memo(Fact);