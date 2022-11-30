import React from 'react';
import './PageText.css'
import main2 from '../../pictr/main2.jpg'

export const PageText = () => {
    return (
        <div className={'container'}>


            <div className={'ff'}>

                <div className="row gy-5">
                    <div><h2 className={'h2PAgeText'}>Let Numbers To Speak</h2></div>
                    <div className="col">

                        <div style={{maxWidth: "18rem;", textAlign: "center", color: 'white'}}>
                            <div className="card-header"><span className="material-symbols-outlined">
                                groups</span>
                            </div>
                            <div className="card-body ">
                                <h5 className="card-title">Primary card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">

                        <div style={{maxWidth: "18rem;", textAlign: "center", color: 'white'}}>
                            <div className="card-header"><span className="material-symbols-outlined">
                                account_circle</span>
                            </div>
                            <div className="card-body ">
                                <h5 className="card-title">Primary card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  <div className={'ff'}>
                <div className={'h2PageText'}><h2>Let Numbers To Speak</h2></div>
            <div className={'displayPAgeText'} >
                <div className={'textPage'}>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been
                    the industry's standard dummy text ever since the 1500s.
                </div>
                <div className={'textPage'}>   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been
                    the industry's standard dummy text ever since the 1500s.</div>
            </div>
            </div>*/}
            {/*  <div className={'ff'}>
                <h2 className={'h2PageText'}>Let Numbers To Speak</h2>
                <div className={'dispalyPAgeText'}>
                    <div className={'textPage'}>

                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s.

                    </div>
                </div>
                <div>
                    <div className={'textPage'}>

                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s.

                    </div>
                </div>
            </div>*/}
        </div>
    );
};
