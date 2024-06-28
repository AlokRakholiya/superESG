import React from "react";
import './suspendissebanner.scss';
export default function Suspendissebanner() {
    return (
        <div>
            <div className="suspendissebanner">
                <div className="container">
                    <div className="suspendissebanner-flex">
                        <div className="suspendissebanner-title">
                            <h5>Suspendisse Sami <span>adia poces imperdiet</span></h5>
                            <p>Nunc finibus, nisl non auctor maximus, tellus orci tincidunt diam, vel interdum ex ligula id urna. Aliquam lacus lacus</p>
                        </div>
                        <div className="suspendissebanner-grid">
                            <div className="suspendissebanner-grid-item">
                                <h6 className="animate__animated animate__fadeInDown wow" data-wow-offset="80" >250M+</h6>
                                <p className="animate__animated animate__fadeInDown wow" data-wow-offset="80">Nunc finibus, nisl non auctor maximus tellus orci.</p>
                            </div>
                            <div className="suspendissebanner-grid-item">
                                <h6 className="animate__animated animate__fadeInDown wow" data-wow-offset="80">90%</h6>
                                <p className="animate__animated animate__fadeInDown wow" data-wow-offset="80">Nunc finibus, nisl non auctor maximus tellus orci.</p>
                            </div>
                            <div className="suspendissebanner-grid-item">
                                <h6 className="animate__animated animate__fadeInDown wow" data-wow-offset="80">135+</h6>
                                <p className="animate__animated animate__fadeInDown wow" data-wow-offset="80">Nunc finibus, nisl non auctor maximus tellus orci.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}