import React from 'react';
import  './ImagePage.css'
import doc from '../../pictr/description.svg'
import monitoring from '../../pictr/monitoring_FILL0.svg'
import leader from '../../pictr/leaderboard_FILL0.svg'
import query from '../../pictr/query_stats_FILL0.svg'

export const ImagePage = () => {
    return (

        <div className='container-md'><div className={'containerImagePage'}>
            <div className={'h1top'}><h2 className={'h1Three'}>vsdfvs fvdfv
                <div className={'moduleLine'}></div></h2></div>
            <div className="card-group  ">
                <div className="card "   data-aos="fade-right">
                    <img src={doc} style={{padding:'30px', }} className="rounded mx-auto " alt="..."/>
                        <div className="card-body" >
                            <h5 className="card-title">Заголовок карточки</h5>
                            <p className="card-text">Это более широкая карточка с вспомогательным текстом ниже в
                                качестве естественного перехода к дополнительному контенту. .</p>
                        </div>

                </div>
                <div className="card" data-aos="flip-down">
                    <img src={query} style={{padding:'30px', }} className="rounded mx-auto " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title" >Заголовок карточки</h5>
                            <p className="card-text">Под этой карточкой есть вспомогательный текст, который является
                                естественным введением к дополнительному содержанию.</p>
                        </div>

                </div>
                <div className="card"  data-aos="fade-left">
                    <img src={monitoring} style={{padding:'30px', }} className="rounded mx-auto " alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Заголовок карточки</h5>
                            <p className="card-text">Это более широкая карта С вспомогательным текстом ниже в качестве
                                естественного перехода к дополнительному контенту.</p>
                        </div>

                </div>
            </div>
</div>
        </div>

    );
};
/*

<div className={'ImagePage'} id={'ImagePage'}>
    <h1 className={'h1Three'}>vsdfvs fvdfv
        <div className={'moduleLine'}></div></h1>
    <div className={'containerImagePage'}>
        <div className={'containerAllImagePage'}>
            <div data-aos="flip-left"  data-aos-duration="1000"
                 className={'imageFive'}><img src={doc} alt={'photo'}/></div>
            <h5>hey money fdf</h5>
            <div className={'textImagePage'}>Listing
                Optimization Listing
                Optimization</div>
        </div>
        <div className={'containerAllImagePage'}>
            <div data-aos="flip-left"  data-aos-duration="1500"
                 className={'imageFive'}><img src={leader} alt={'photo'}/></div>
            <h5>hey money fdf</h5>
            <div className={'textImagePage'}>Industry
                Research</div>
        </div>
        <div className={'containerAllImagePage'}>
            <div data-aos="flip-left"  data-aos-duration="2000"
                 className={'imageFive'}><img src={query} alt={'photo'}/></div>
            <h5>hey money fdf</h5>
            <div className={'textImagePage'}>Product Sourcing &
                Development</div>
        </div>
        <div className={'containerAllImagePage'}>
            <div data-aos="flip-left"  data-aos-duration="2500"
                 className={'imageFive'}><img src={monitoring} alt={'photo'}/></div>
            <h5>hey money fdf</h5>
            <div className={'textImagePage'}>Analytics &
                Reporting</div>
        </div>


    </div>*/


/*
<div className={'row'}>
    <div className="card mb-3" style={{maxWidth: "540px;"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={doc} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Заголовок карточки</h5>
                    <p className="card-text">Это более широкая карта с вспомогательным текстом ниже в качестве
                        естественного перехода к дополнительному контенту. Этот контент немного длиннее.</p>
                    <p className="card-text"><small className="text-muted">Последнее обновление 3 мин.
                        назад</small></p>
                </div>
            </div>
        </div>
    </div>

    <div className="card mb-3" style={{maxWidth: "540px;"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={leader} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Заголовок карточки</h5>
                    <p className="card-text">Это более широкая карта с вспомогательным текстом ниже в качестве
                        естественного перехода к дополнительному контенту. Этот контент немного длиннее.</p>
                    <p className="card-text"><small className="text-muted">Последнее обновление 3 мин.
                        назад</small></p>
                </div>
            </div>
        </div>
    </div>

    <div className="card mb-3" style={{maxWidth: "540px;"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={query} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Заголовок карточки</h5>
                    <p className="card-text">Это более широкая карта с вспомогательным текстом ниже в качестве
                        естественного перехода к дополнительному контенту. Этот контент немного длиннее.</p>
                    <p className="card-text"><small className="text-muted">Последнее обновление 3 мин.
                        назад</small></p>
                </div>
            </div>
        </div>
    </div>
</div>*/
