import React from 'react';
import './Contacts.css'


export const Contacts = () => {

    return (

            <div className="container text-center" style={{marginBottom:'20px' }}>
                <h2 className={'h1Three'}>Contact us
                    <div className={'moduleLine'}></div>
                </h2>

                <div className="row ">
                    <div className="col" style={{margin:'20px' }}>
                        <div  data-aos="fade-right"   className={'contactText'}>phone: 8 (800)-888-88-88</div>
                        <div data-aos="fade-right"  className={'contactText'}>e-maile: amzn@mail.ru</div>
                        <div data-aos="fade-right"   className={'contactText'}>adress: Slavakia 1k2</div>
                    </div>
                    <div className="col" style={{margin:'20px' }}>
                        <div data-aos="fade-left" className={'imageContact'}>
                            image or mb map
                        </div>
                    </div>
                </div>
            </div>

/*        <div className={'container'}>
            <h2 className={'h1Three'}>Contact us
                <div className={'moduleLine'}></div>
            </h2>
            <div className={'containerContacts'}>

<div className={'contact'}  >

    <div  data-aos="fade-right"   className={'contactText'}>phone: 8 (800)-888-88-88</div>
   <div data-aos="fade-right"  className={'contactText'}>e-maile: amzn@mail.ru</div>
  <div data-aos="fade-right"   className={'contactText'}>adress: Slavakia 1k2</div>
</div>
                <div data-aos="fade-left" className={'imageContact'}>
                    image or mb map
                </div>

            </div>
            </div>*/
    );
};

