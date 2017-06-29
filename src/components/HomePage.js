import React from 'react';
import Footer from './Footer';


export default function Home () {

    console.log(Footer());
     function body(){
        return  ((<div className="container container-fluid">
            <div className="row">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img alt="" src="https://unsplash.it/1210/247/?random" />
                            <div className="carousel-caption">
                                <h3>Test</h3>
                                <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
                            </div>
                        </div>

                        <div className="item">
                            <img alt="" src="https://unsplash.it/1208/248/?random" />
                            <div className="carousel-caption">
                                <h3>Test</h3>
                                <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src="https://unsplash.it/1200/249/?random" alt="Flower" />
                            <div className="carousel-caption">
                                <h3>Test</h3>
                                <p>Beautiful flowers in Kolymbari, Crete.</p>
                            </div>
                        </div>

                        <div className="item">
                            <img  src="https://unsplash.it/1229/255/?random" alt="Flower" />
                            <div className="carousel-caption">
                                <h3>Test</h3>
                                <p>Beautiful flowers in Kolymbari, Crete.</p>
                            </div>
                        </div>
                    </div>

                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h3 className="text-center">Newcomers Begin Here</h3>
                    <p>
                        You will immediately earn 75% of paid commission, payable to you within 2 weeks of receipt. Upon registering, you immediately receive you personalized website, with product and software training as well as mentoring. You will have at your fingertips all the tools necessary to immediately begin your business in the travel industry.
                    </p>
                </div>
                <div className="col-md-4">
                    <h3 className="text-center">Newcomers Begin Here</h3>
                    <p>
                        You will immediately earn 75% of paid commission, payable to you within 2 weeks of receipt. Upon registering, you immediately receive you personalized website, with product and software training as well as mentoring. You will have at your fingertips all the tools necessary to immediately begin your business in the travel industry.
                    </p>
                </div>
                <div className="col-md-4">
                    <h3 className="text-center">Newcomers Begin Here</h3>
                    <div>
                        You will immediately earn 75% of paid commission, payable to you within 2 weeks of receipt. Upon registering, you immediately receive you personalized website, with product and software training as well as mentoring. You will have at your fingertips all the tools necessary to immediately begin your business in the travel industry.
                    </div>
                </div>
            </div>
        </div>));
    }

    return body();
}

