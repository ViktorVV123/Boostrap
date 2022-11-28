import React from 'react';
import './App.css';
import {Main} from "./Components/Main/Main";
import {SaidBar} from "./Components/SideBar/SaidBar";
import {Footer} from "./Components/Footer/Footer";

function App() {

    return (
        <div>
            <SaidBar/>
            <Main/>
            <Footer/>

        </div>
    )

}

export default App;
