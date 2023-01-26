import React, {useEffect, useState} from 'react';

const Fact = ({ fact }) => {

    const [ num, setNum ] = useState(0);

    useEffect(()=>{
        NumberCount(temp)
    }, [fact])

    let temp = fact.number;
    let step;
    if(temp < 21){
        step = 1;
    }
    if(temp > 21 && temp < 101){
        step = 10;
    }
    if(temp>1000){
        step = 200;
    }
    let start=0;
    const time = 2000;

    function NumberCount (temp) {
        let t = Math.round(time/(num/step));
        let interval = setInterval(()=>{
            start = start + step;
            if(start === temp) {
                clearInterval(interval);
            }
            setNum(start)
        }, t)
    }


    return (
        <div className="facts__item">
            <p className="facts__item_num num1">{ num }</p>
            <p className="facts__item_text">{ fact.title }</p>
        </div>
    );
};

export default React.memo(Fact);