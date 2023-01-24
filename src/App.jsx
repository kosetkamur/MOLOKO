import React, {useEffect, useState} from "react";

import './App.sass'

import Header from "./components/Header";
import About from "./components/About";
import Collaboration from "./components/Collaboration";
import Provider from "./components/Provider";
import Form from "./components/Form";
import Partners from "./components/Partners";
import News from "./components/News";
import Contacts from "./components/Contacts";

import GetData from "./api/getData";
import Maps from "./components/Map/Maps";
import Catalog from "./components/Catalog/Catalog";

function App() {
  const [ news, setNews ] = useState('');

      useEffect(() => {
          GetData.getNews().then(resp => {
              setNews(resp);
          });
      }, []);



  return (
    <div className="body">
        <Header />
        <About />
        <Catalog />
        <Collaboration />
        {/*<Provider />*/}
        {/*<Form />*/}
        <Partners />
        <News news={ news }/>
        <Maps />
        <Contacts />
    </div>
  );
}

export default App;
