import React from "react";
import './herobanner.scss';
import searchicon from '../../../assets/icons/search.svg';
import truemark from '../../../assets/icons/truemark.svg';
import arrdown from '../../../assets/icons/down-black.svg';
export default function Herobanner() {
    return (
        <div>
            <div className="container">
                <div className="herobanner">
                    <div className="herobanner-main">
                        <div className="herobanner-main-title animate__animated animate__fadeInDown wow" data-wow-offset="80">
                            <h1>Manage and assess<span>ESG performance</span></h1>
                        </div>
                        <div className="herobanner-main-text">
                            <p>Nunc finibus, nisl non auctor maximus, tellus orci tincidunt diam, vel interdum ex ligula id urna. Aliquam lacus lacus</p>
                        </div>
                        <div className="herobanner-main-searchparent">
                            <div className="herobanner-main-search">
                                <div className="herobanner-main-search-consultants">
                                    <span>Consultants </span>
                                </div>
                                <div className="herobanner-main-search-searchbar">
                                    <img src={searchicon} />
                                    <input type="text" placeholder="Search by name or expertise"></input>
                                    <button>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="herobanner-templates">
                        <div className="herobanner-templates-grid">
                            <div className="herobanner-templates-grid-item animate__animated animate__fadeInDown wow" data-wow-offset="80">
                                <img src={truemark} />
                                <p><span>Nunc finibus nis.</span> l non auctor maximus tellus orci tincidunt diam.</p>
                            </div>
                            <div  className="herobanner-templates-grid-item animate__animated animate__fadeInDown wow" data-wow-offset="80">
                                <img src={truemark} />
                                <p><span>Nunc finibus nis.</span> l non auctor maximus tellus orci tincidunt diam.</p>
                            </div>
                            <div  className="herobanner-templates-grid-item animate__animated animate__fadeInDown wow" data-wow-offset="80">
                                <img src={truemark} />
                                <p><span>Nunc finibus nis.</span> l non auctor maximus tellus orci tincidunt diam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}