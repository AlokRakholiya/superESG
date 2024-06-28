import React from "react";
import './featured.scss';
import fcard1 from '../../../assets/images/fcard1.png';
import fcard2 from '../../../assets/images/fcard2.png';
import fcard3 from '../../../assets/images/fcard3.png';
import fcard4 from '../../../assets/images/fcard4.png';
import pro01 from '../../../assets/images/1.jpeg';
import pro02 from '../../../assets/images/2.jpeg';
import pro03 from '../../../assets/images/3.jpeg';
import pro04 from '../../../assets/images/4.jpeg';


export default function Featured() {
    return (
        <div>
            <div className="featured">
                <div className="container">
                    <div className="featured-tab">
                        <div className="featured-tab-items">
                            <span>Featured</span>
                            <span>Policies</span>
                            <span>Regulations</span>
                            <span>Carbon</span>
                        </div>
                    </div>
                    <div className="featured-grid">
                        <div className="featured-grid-item animate__animated animate__fadeInUp wow" data-wow-offset="200">
                            <div className="featured-grid-item-image">
                                <img src={fcard1} />
                            </div>
                            <div className="featured-grid-item-data">
                                <div className="featured-grid-item-data-box">
                                    <p>Road to carbon positive impact</p>
                                    <button>
                                        <div className="black-circle">
                                            <img src={pro01}></img>
                                        </div>
                                        @Mark
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="featured-grid-item animate__animated animate__fadeInUp wow" data-wow-offset="200">
                            <div className="featured-grid-item-image">
                                <img src={fcard2} />
                            </div>
                            <div className="featured-grid-item-data">
                                <div className="featured-grid-item-data-box">
                                    <p>Road to carbon positive impact</p>
                                    <button>
                                        <div className="black-circle">
                                        <img src={pro02}></img>
                                        </div>
                                        @Rozzy
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="featured-grid-item animate__animated animate__fadeInUp wow" data-wow-offset="200">
                            <div className="featured-grid-item-image">
                                <img src={fcard3} />
                            </div>
                            <div className="featured-grid-item-data">
                                <div className="featured-grid-item-data-box">
                                    <p>Road to carbon positive impact</p>
                                    <button>
                                        <div className="black-circle">
                                        <img src={pro03}></img>
                                        </div>
                                        @Joy
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="featured-grid-item animate__animated animate__fadeInUp wow" data-wow-offset="200">
                            <div className="featured-grid-item-image">
                                <img src={fcard4} />
                            </div>
                            <div className="featured-grid-item-data">
                                <div className="featured-grid-item-data-box">
                                    <p>Road to carbon positive impact</p>
                                    <button>
                                        <div className="black-circle">
                                        <img src={pro04}></img>
                                        </div>
                                        @Alex   
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}