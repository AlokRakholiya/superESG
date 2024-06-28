import React from "react";
import './footer.scss';
import footerlogo from '../../../assets/logo/footer-logo.svg';
import twitter from '../../../assets/logo/white-twitter.svg';
import facebook from '../../../assets/logo/white-facebook.svg';
import instagram from '../../../assets/logo/white-insta.svg';
import message from '../../../assets/logo/white-message.svg';
export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer-body">
                    <div className="container">
                        <div className="footer-body-flex">
                            <div className="footer-body-flex-logo">
                                <div className="superesglogo">
                                    <img src={footerlogo} />
                                </div>
                                <div className="other-logos">
                                    <img src={twitter} />
                                    <img src={facebook} />
                                    <img src={instagram} />
                                    <img src={message} />
                                </div>
                            </div>
                            <div className="footer-body-flex-grid">
                                <div className="footer-body-flex-grid-item">
                                    <h5>Product</h5>
                                    <a>Shared Inbox</a>
                                    <a>Knowledge Base</a>
                                    <a>Live Chat</a>
                                    <a>Messaging</a>
                                    <a>Costumer Management</a>
                                    <a>Reporting</a>
                                    <a>Integrations</a>
                                </div>
                                <div className="footer-body-flex-grid-item">
                                    <h5>Consultants</h5>
                                    <a>Shared Inbox</a>
                                    <a>Knowledge Base</a>
                                    <a>Live Chat</a>
                                    <a>Messaging</a>
                                    <a>Costumer Management</a>
                                    <a>Reporting</a>
                                    <a>Integrations</a>
                                </div>
                                <div className="footer-body-flex-grid-item">
                                    <h5>Resources</h5>
                                    <a>Shared Inbox</a>
                                    <a>Knowledge Base</a>
                                    <a>Live Chat</a>
                                    <a>Messaging</a>
                                    <a>Costumer Management</a>
                                    <a>Reporting</a>
                                    <a>Integrations</a>
                                </div>
                                <div className="footer-body-flex-grid-item">
                                    <h5>Company</h5>
                                    <a>Shared Inbox</a>
                                    <a>Knowledge Base</a>
                                    <a>Live Chat</a>
                                    <a>Messaging</a>
                                    <a>Costumer Management</a>
                                    <a>Reporting</a>
                                    <a>Integrations</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-data">
                        <a>© 2022 Superesg</a>
                        <a>Privacy Policy</a>
                        <a>Terms & Conditions</a>
                        <a> Security policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}