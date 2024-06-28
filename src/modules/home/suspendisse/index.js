import React from "react";
import './suspendisse.scss';
import temp from '../../../assets/images/fcard1.png'
import mcardarrow from '../../../assets/icons/marqueecardarrow.svg';
import righticon from '../../../assets/icons/right-icon.svg';
import prof1 from '../../../assets/images/investment.jpg'
import prof2 from '../../../assets/images/sustainability0.jpeg'
import prof3 from '../../../assets/images/Corporate social responsibility.png'
import prof4 from '../../../assets/images/Environmental protection.jpeg'
import prof5 from '../../../assets/images/Sustainable development0.png'
import prof6 from '../../../assets/images/Sustainability reporting.png'
import prof7 from '../../../assets/images/risk0.jpg'
import prof8 from '../../../assets/images/Waste management.jpeg'
export default function Suspendisse() {
    return (
        <div>
            <div className="container">
                <div className="suspendisse">
                    <div className="suspendisse-title">
                        <h3>Suspendisse <span>Sami imperdiet</span></h3>
                        <p>Nunc finibus, nisl non auctor maximus, tellus orci tincidunt diam, vel interdum ex ligula id urna. Aliquam lacus lacus</p>
                    </div>
                </div>
                <div className="suspendisse-box">
                    <div className="suspendisse-box-grid">
                        <div className="suspendisse-box-grid-item">
                            <div className="suspendisse-box-grid-item-body">
                                <div className="suspendisse-box-grid-item-body-icon">
                                    <img src={prof1}></img>
                                </div>
                                <div className="suspendisse-box-grid-item-body-data">
                                    <h4>Investment</h4>
                                    <p>1022 Registered</p>
                                </div>
                                <div className="suspendisse-box-grid-item-body-button">
                                    <img src={mcardarrow} />
                                    <span>See Company</span>
                                </div>
                            </div>
                        </div>
                        <div className="suspendisse-box-grid-item">
                            <div className="suspendisse-box-grid-item-body">
                                <div className="suspendisse-box-grid-item-body-icon">
                                <img src={prof2}></img>
                                </div>
                                <div className="suspendisse-box-grid-item-body-data">
                                    <h4>Sustainability</h4>
                                    <p>551 Registered</p>
                                </div>
                                <div className="suspendisse-box-grid-item-body-button">
                                    <img src={mcardarrow} />
                                    <span>See Company</span>
                                </div>
                            </div>
                        </div>
                        <div className="suspendisse-box-grid-item">
                            <div className="suspendisse-box-grid-item-body">
                                <div className="suspendisse-box-grid-item-body-icon">
                                <img src={prof3}></img>
                                </div>
                                <div className="suspendisse-box-grid-item-body-data">
                                    <h4>Corporate responsibility</h4>
                                    <p>251 Registered</p>
                                </div>
                                <div className="suspendisse-box-grid-item-body-button">
                                    <img src={mcardarrow} />
                                    <span>See Company</span>
                                </div>
                            </div>
                        </div>
                        <div className="suspendisse-box-grid-item">
                            <div className="suspendisse-box-grid-item-body">
                                <div className="suspendisse-box-grid-item-body-icon">
                                <img src={prof4}></img>
                                </div>
                                <div className="suspendisse-box-grid-item-body-data">
                                    <h4>Environmental protection</h4>
                                    <p>671 Registered</p>
                                </div>
                                <div className="suspendisse-box-grid-item-body-button">
                                    <img src={mcardarrow} />
                                    <span>See Company</span>
                                </div>
                            </div>
                        </div>
                        <div className="suspendisse-box-grid-item">
                            <div className="suspendisse-box-grid-item-body">
                                <div className="suspendisse-box-grid-item-body-icon">
                                <img src={prof5}></img>
                                </div>
                                <div className="suspendisse-box-grid-item-body-data">
                                    <h4>Sustainable development</h4>
                                    <p>251 Registered</p>
                                </div>
                                <div className="suspendisse-box-grid-item-body-button">
                                    <img src={mcardarrow} />
                                    <span>See Company</span>
                                </div>
                            </div>
                        </div>
                        <div className="suspendisse-box-grid-item">
                            <div className="suspendisse-box-grid-item-body">
                                <div className="suspendisse-box-grid-item-body-icon">
                                <img src={prof6}></img>
                                </div>
                                <div className="suspendisse-box-grid-item-body-data">
                                    <h4>Sustainability reporting</h4>
                                    <p>121 Registered</p>
                                </div>
                                <div className="suspendisse-box-grid-item-body-button">
                                    <img src={mcardarrow} />
                                    <span>See Company</span>
                                </div>
                            </div>
                        </div>
                        <div className="suspendisse-box-grid-item">
                            <div className="suspendisse-box-grid-item-body">
                                <div className="suspendisse-box-grid-item-body-icon">
                                <img src={prof7}></img>
                                </div>
                                <div className="suspendisse-box-grid-item-body-data">
                                    <h4>Risk management</h4>
                                    <p>986 Registered</p>
                                </div>
                                <div className="suspendisse-box-grid-item-body-button">
                                    <img src={mcardarrow} />
                                    <span>See Company</span>
                                </div>
                            </div>
                        </div>
                        <div className="suspendisse-box-grid-item">
                            <div className="suspendisse-box-grid-item-body">
                                <div className="suspendisse-box-grid-item-body-icon">
                                <img src={prof8}></img>
                                </div>
                                <div className="suspendisse-box-grid-item-body-data">
                                    <h4>Waste management</h4>
                                    <p>475 Registered</p>
                                </div>
                                <div className="suspendisse-box-grid-item-body-button">
                                    <img src={mcardarrow} />
                                    <span>See Company</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="suspendisse-box-button">
                        <button>See all industries <img src={righticon} /></button>
                    </div>
                </div>
            </div>
        </div>

    )
}