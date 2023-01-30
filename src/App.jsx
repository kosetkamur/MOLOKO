import React from "react";

import './App.sass'

import Header from "./components/Header";
import About from "./components/About";
import Collaboration from "./components/Collaboration";
import Provider from "./components/Provider";
import Form from "./components/Form";
import Partners from "./components/Partners";
import News from "./components/News";
import Contacts from "./components/Contacts";
import Maps from "./components/Map/Maps";
import Catalog from "./components/Catalog/Catalog";


function App() {
  return (
    <div className="body">
        <Header />
        <About />
        <Catalog />
        <Collaboration />
        <Provider />
        <Form />
        <Partners />
        <News/>
        <Maps />
        <Contacts />
    </div>
  );
}

export default App;
