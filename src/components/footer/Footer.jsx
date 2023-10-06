import "./footer.css";
import { Text } from "../../containers/Languages";

import Location from "../../assets/Location.png";
import Calling from "../../assets/Calling.png";
import Message from "../../assets/Message.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container container">
                <div className="main-info">
                    <div className="info">
                        <div style={{ width: "20px" }}>
                            <img
                                src={Location}
                                alt=""
                                style={{ width: "100%" }}
                            />
                        </div>
                        <p>
                            <Text tid="footer.main-data.addres" />
                        </p>
                    </div>
                    <div className="info">
                        <div style={{ width: "20px" }}>
                            <img
                                src={Calling}
                                alt=""
                                style={{ width: "100%" }}
                            />
                        </div>
                        <p className="ltr">+20 112 676 5371</p>
                    </div>
                    <div className="info">
                        <div style={{ width: "20px" }}>
                            <img
                                src={Message}
                                alt=""
                                style={{ width: "100%" }}
                            />
                        </div>
                        <p>myourmiracle@gmail.com</p>
                    </div>
                </div>

                <div className="prim-info">
                    <div>
                        <h3 className="footer-heading">
                            <Text tid="footer.service-data.title" />
                        </h3>
                        <ul className="footer-list">
                            <li>
                                <a href="" className="footer-link">
                                    <Text tid="footer.service-data.ui" />
                                </a>
                            </li>
                            <li>
                                <a href="" className="footer-link">
                                    <Text tid="footer.service-data.mobile" />
                                </a>
                            </li>
                            <li>
                                <a href="" className="footer-link">
                                    <Text tid="footer.service-data.motion" />
                                </a>
                            </li>
                            <li>
                                <a href="" className="footer-link">
                                    <Text tid="footer.service-data.web" />
                                </a>
                            </li>
                            <li>
                                <a href="" className="footer-link">
                                    <Text tid="footer.service-data.marketing" />
                                </a>
                            </li>
                            <li>
                                <a href="" className="footer-link">
                                    <Text tid="footer.service-data.video" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer-heading">
                            <Text tid="footer.company-data.title" />
                        </h3>
                        <ul className="footer-list">
                            <li>
                                <a href="" className="footer-link">
                                    <Text tid="footer.company-data.service" />
                                </a>
                            </li>
                            <li>
                                <a href="" className="footer-link">
                                    <Text tid="footer.company-data.our-team" />
                                </a>
                            </li>
                            <li>
                                <a href="" className="footer-link">
                                    <Text tid="footer.company-data.portfolio" />
                                </a>
                            </li>
                            <li>
                                <a href="" className="footer-link">
                                    <Text tid="footer.company-data.partner" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer-heading">
                            <Text tid="footer.supourt-data.title" />
                        </h3>
                        <ul className="footer-list">
                            <li>
                                <a href="" className="footer-link">
                                    <Text tid="footer.supourt-data.help" />
                                </a>
                            </li>
                            <li>
                                <a href="" className="footer-link">
                                    <Text tid="footer.supourt-data.feed" />
                                </a>
                            </li>
                            <li>
                                <a href="" className="footer-link">
                                    <Text tid="footer.supourt-data.contact" />
                                </a>
                            </li>
                            <li>
                                <a href="" className="footer-link">
                                    <Text tid="footer.supourt-data.terms" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer-heading">
                            <Text tid="footer.social-data.title" />
                        </h3>
                        <ul className="footer-list">
                            <li>
                                <a
                                    href="https://www.facebook.com/people/Make-Your-Miracle-MYM/100094065639945/?mibextid=ZbWKwL"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="footer-link"
                                >
                                    <Text tid="footer.social-data.facebook" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/mym-make-your-miracle/"
                                    className="footer-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Text tid="footer.social-data.linkedin" />{" "}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/mym_miracle/?utm_source=qr&igshid=OGIxMTE0OTdkZA"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="footer-link"
                                >
                                    <Text tid="footer.social-data.insta" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.threads.net/@mym_miracle"
                                    className="footer-link"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Text tid="footer.social-data.theards" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />
            <div className="footer-foot container">
                <p>
                    &copy; <Text tid="footer.foot-footer.copy" />
                </p>

                <div className="d-flex justify-content-end align-items-center gap-5 pt-2">
                    <a href="" style={{ color: "var(--grey-color)" }}>
                        <Text tid="footer.foot-footer.privacy" />
                    </a>
                    <a href="" style={{ color: "var(--grey-color)" }}>
                        <Text tid="footer.foot-footer.security" />
                    </a>
                    <a href="" style={{ color: "var(--grey-color)" }}>
                        <Text tid="footer.foot-footer.terms" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
