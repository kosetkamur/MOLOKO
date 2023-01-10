import './App.sass'

import Header from "./components/Header";
import About from "./components/About";
import Collaboration from "./components/Collaboration";
import Provider from "./components/Provider";
import Form from "./components/Form";

function App() {
  return (
    <div className="body">
        <Header />
        <About />
        <Collaboration />
        <Provider />
        <Form />
    </div>
  );
}

export default App;
