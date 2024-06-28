import React from "react";
import './strategy.scss';
import pro1 from '../../../assets/images/Assess.jpeg';
import pro2 from '../../../assets/images/Analyse.png';
import pro3 from '../../../assets/images/Enable.png';
import pro4 from '../../../assets/images/Enhance.png';

export default function Strategy() {
    return (
        <div>
            <div className="strategy">
                <div className="container">
                    <div className="strategy-title">
                        <h1>Build your <span>ESG strategy today</span></h1>
                        <p>We provide the best service, many features and services for you so you will be amazed.</p>
                    </div>
                    <div className="strategy-grid">
                        <div className="strategy-grid-item">
                            <div className="strategy-grid-item-body">
                                <div className="strategy-grid-item-body-icon">
                                <img src={pro1}></img>
                                </div>
                                <div className="strategy-grid-item-body-data">
                                    <h4>Assess</h4>
                                    <p>Rate and benchmark the resiliency of your supply chain through our automated resiliency scoring.</p>
                                </div>
                            </div>
                        </div>
                        <div className="strategy-grid-item">
                            <div className="strategy-grid-item-body">
                                <div className="strategy-grid-item-body-icon">
                                <img src={pro2}></img>
                                </div>
                                <div className="strategy-grid-item-body-data">
                                    <h4>Analyse</h4>
                                    <p>In-depth sustainability analysis and ESG reporting on your suppliers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="strategy-grid-item">
                            <div className="strategy-grid-item-body">
                                <div className="strategy-grid-item-body-icon">
                                <img src={pro3}></img>
                                </div>
                                <div className="strategy-grid-item-body-data">
                                    <h4>Enable</h4>
                                    <p>Confident reporting your supply chain impact.</p>
                                </div>
                            </div>
                        </div>
                        <div className="strategy-grid-item">
                            <div className="strategy-grid-item-body">
                                <div className="strategy-grid-item-body-icon">
                                <img src={pro4}></img>
                                </div>
                                <div className="strategy-grid-item-body-data">
                                    <h4>Enhance</h4>
                                    <p>Enhancing the sustainability of your suppliers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}