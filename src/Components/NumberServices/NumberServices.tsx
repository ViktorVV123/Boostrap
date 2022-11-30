import React from 'react';
import './NumberServices.css'
import oneImage from '../../pictr/looksone.svg'
import twoImage from '../../pictr/looks_two.svg'
import threeImage from '../../pictr/looks_three.svg'
import fourImage from '../../pictr/looks_four.svg'

export const NumberServices = () => {
    return (
        <div className="container text-center" style={{marginBottom: '40px'}}>

            <h2 className={'h1Three'}>Number Services
                <div className={'moduleLine'} style={{marginBottom: '40px'}} ></div>
            </h2>

            <div className="card-group">


                <div className="col"  data-aos="fade-right" >
                    <div className="card" style={{maxWidth: '20rem'}} >
                        <img src={oneImage} style={{padding: '30px',}} className="rounded mx-auto " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>


                <div className="col"  >
                    <div className="card" style={{maxWidth: '20rem'}} data-aos="flip-left">
                        <img src={twoImage} style={{padding: '30px',}} className="rounded mx-auto " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>


                <div className="col"  >
                    <div className="card" style={{maxWidth: '20rem'}} data-aos="flip-right">
                        <img src={threeImage} style={{padding: '30px',}} className="rounded mx-auto " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>


                <div className="col" data-aos="fade-left" >
                    <div className="card" style={{maxWidth: '20rem'}} >
                        <img src={fourImage} style={{padding: '30px',}} className="rounded mx-auto " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    {/*<div className={'row'}>

    <div className="card" data-aos="fade-up">
        <div className="row g-0">
            <div className="col-5 col-sm-4">
                <img style={{padding:'30px', }} src={oneImage}  className="rounded mx-auto" alt="card-horizontal-image"/>
            </div>
            <div className="col-7 col-sm-8">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="card" data-aos="fade-up">
        <div className="row g-0">
            <div className="col-5 col-sm-4">
                <img  src={twoImage} style={{padding:'30px', }} className="rounded mx-auto" alt="card-horizontal-image"/>
            </div>
            <div className="col-7 col-sm-8">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="card" data-aos="fade-up">
        <div className="row g-0">
            <div className="col-5 col-sm-4">
                <img style={{padding:'30px', }} src={threeImage}  className="rounded mx-auto" alt="card-horizontal-image"/>
            </div>
            <div className="col-7 col-sm-8">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="card" data-aos="fade-up" style={{padding:'10px', }}>
        <div className="row g-0">
            <div className="col-5 col-sm-4">
                <img style={{padding:'30px', }} src={fourImage}  className="rounded mx-auto" alt="card-horizontal-image"/>
            </div>
            <div className="col-7 col-sm-8">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional content.</p>
                </div>
            </div>
        </div>
    </div>
</div>*/
    }


    /*<div className={'FourPage'}>

        <div className={'containerFour'}>
            <div data-aos="fade-up"  className={'containerAll'}>
                <div   className={'containerImage'}><img src={oneImage} alt={'photo'}/></div>
                <div  className={'containerText'}>
                    <ul className={'ul'}>
                        <li>Analyze Products</li>
                    <li> Analyze the Market</li>
                    <li>Leverage Opportunities & Set Goals</li>
                    <li> Facilitate Customized Action Plan</li></ul>
                </div>
            </div>
            <div data-aos="fade-up"  className={'containerAll'}>
                <div className={'containerImage'}><img src={twoImage} alt={'photo'}/></div>
                <div className={'containerText'}>
                    <ul className={'ul'}>
                    <li>Develop Paid Advertising Strategy</li>
                    <li>Develop Keyword Strategy & Optimize Listings</li>
                    <li>Utilize or Improve High ROI Ads</li>
                    </ul>
                </div>
            </div>
            <div data-aos="fade-up"  className={'containerAll'}>
                <div className={'containerImage'}><img src={threeImage} alt={'photo'}/></div>
                <div  className={'containerText'}>
                    <ul className={'ul'}>
                        <li >Evaluate New Marketplaces</li>
                    <li>Manage Your products exposure</li>
                    <li>Get Customer Reviews</li>
                    <li> Refine Pricing Strategies as Needed</li>
                    </ul>
                </div>
            </div>
            <div data-aos="fade-up"  className={'containerAll'}>
                <div className={'containerImage'}><img src={fourImage} alt={'photo'}/></div>
                <div className={'containerText'}>
                    <ul className={'ul'}>
                        <li>Evaluate New Marketplaces</li>
                        <li>Manage Your products exposure</li>
                        <li>Get Customer Reviews</li>
                        <li> Refine Pricing Strategies as Needed</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>*/

};
