import React from "react";
import './suspendissecards.scss';
import card1 from '../../../assets/images/sd-card1.png';
import card2 from '../../../assets/images/sd-card2.png';
import card3 from '../../../assets/images/sd-card3.png';
export default function Suspendissecards() {
    return (
        <div>
            <div className="suspendissecards">
                <div className="container">
                    <div className="suspendissecards-title">
                        <h1>Suspendisse <span>Sami imperdiet</span></h1>
                        <p>Nunc finibus, nisl non auctor maximus, tellus orci tincidunt diam, vel interdum ex ligula id urna. Aliquam lacus lacus</p>
                    </div>
                    <div className="suspendissecards-grid">
                        <div className="suspendissecards-grid-item">
                            <div className="suspendissecards-grid-item-image">
                                <img src={card1} />
                            </div>
                            <div className="suspendissecards-grid-item-data">
                                <span>FINTECH</span>
                                <h5>Vitae gravida mauris ligula ultrices diam. Nam in justo eget ex tristique...</h5>
                                <p>Published 27 March 2022</p>
                            </div>
                        </div>
                        <div className="suspendissecards-grid-item">
                            <div className="suspendissecards-grid-item-image">
                                
                            </div>
                            <div className="suspendissecards-grid-item-data">
                                <span>FINTECH</span>
                                <h5>Vitae gravida mauris ligula ultrices diam. Nam in justo eget ex tristique...</h5>
                                <p>Published 27 March 2022</p>
                            </div>
                        </div>
                        <div className="suspendissecards-grid-item">
                            <div className="suspendissecards-grid-item-image">
                                <img src={card3} />
                            </div>
                            <div className="suspendissecards-grid-item-data">
                                <span>FINTECH</span>
                                <h5>Vitae gravida mauris ligula ultrices diam. Nam in justo eget ex tristique...</h5>
                                <p>Published 27 March 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}