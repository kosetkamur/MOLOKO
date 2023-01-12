import React, {useEffect, useState} from "react";

import './App.sass'

import Header from "./components/Header";
import About from "./components/About";
import Collaboration from "./components/Collaboration";
import Provider from "./components/Provider";
import Form from "./components/Form";
import Partners from "./components/Partners";
import Logistic from "./components/Logistic";

import GetData from "./api/getData";
import News from "./components/News";
import Administration from "./components/Administration";
import Contacts from "./components/Contacts";
import FormPopup from "./components/FormPopup";

function App() {
  const [ items, setItems ] = useState('')

  useEffect(() => {
      GetData.getAll().then(resp => {
          setItems(resp);
      });
  }, []);

    const [ hide, setHide ] = useState(false);

    const handleClick = () => {
        setHide(true);
    }

    const handleClose = () => {
        setHide(false);
    }

    useEffect(() => {
        let body = document.querySelector('body');
        if(hide===true){
            body.className = 'no-scroll'
        } else {
            body.classList.remove('no-scroll');
        }
    }, [hide])


  return (
    <div className="body">
        <Header />
        <About />
        <Collaboration />
        <Provider />
        <Form />
        <Partners />
        { hide && <FormPopup handleClose={ handleClose } /> }
        <Logistic handleClick={handleClick} />
        <News news={ items }/>
        <Administration />
        <Contacts />
    </div>
  );
}

export default App;
