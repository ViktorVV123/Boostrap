import React from 'react';
import './App.css';
import {Main} from "./Components/Main/Main";
import {SaidBar} from "./Components/SideBar/SaidBar";
import {Footer} from "./Components/Footer/Footer";
import {ImagePage} from "./Components/ImagePage/ImagePage";
import {Contacts} from "./Components/Contacts/Contacts";
import {NumberServices} from "./Components/NumberServices/NumberServices";
import {PageText} from "./Components/PageText/PageText";

function App() {

    return (
        <div>
            <SaidBar/>
            <Main/>
            <NumberServices/>
            <PageText/>
            <ImagePage/>
            <Contacts/>
            <Footer/>

        </div>
    )

}

export default App;
