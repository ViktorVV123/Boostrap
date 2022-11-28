import React from 'react';
import './App.css';
import {Main} from "./Components/Main/Main";
import {SaidBar} from "./Components/SideBar/SaidBar";
import {Footer} from "./Components/Footer/Footer";
import {ImagePage} from "./Components/ImagePage/ImagePage";
import {Contacts} from "./Components/Contacts/Contacts";

function App() {

    return (
        <div>
            <SaidBar/>
            <Main/>
            <ImagePage/>
            <Contacts/>
            <Footer/>

        </div>
    )

}

export default App;
