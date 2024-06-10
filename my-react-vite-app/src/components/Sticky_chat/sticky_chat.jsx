import React, { useState } from "react";
import './sticky.css';

const STC_ChT = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {!isOpen && (
                <a className="chat_area" style={{ width: "auto", height: "auto", position: "fixed", bottom: "10px", right: "34px", zIndex: "999" }} onClick={toggleChat}>
                    <span className="chatIcon" style={{ display: "inline-block", width: "65px", height: "65px" }}>
                        <svg width="45px" height="45px" viewBox="0 0 78 78">
                            <g id="Component_10_3" transform="translate(9 9)">
                                <g transform="matrix(1, 0, 0, 1, -9, -9)">
                                    <rect id="Rectangle_5645-2" width="60" height="60" rx="28" transform="translate(9 9)" fill="#ff6f71"></rect>
                                </g>
                                <g id="Group_42022" transform="translate(16 17.936)">
                                    <g id="chatting">
                                        <path id="Path_1" d="M20.181,48.692a.822.822,0,0,1-1.3.657l-4.51-3.163a2.233,2.233,0,0,0-1.289-.406H3.167A3.144,3.144,0,0,1,0,42.666V32.433a.814.814,0,0,1,.82-.807H17.015a3.144,3.144,0,0,1,3.167,3.113ZM18.541,34.739a1.515,1.515,0,0,0-1.526-1.5H1.641v9.427a1.515,1.515,0,0,0,1.526,1.5h9.919a3.883,3.883,0,0,1,2.241.705l3.213,2.254Z" transform="translate(7.819 -31.626)" fill="#fff" stroke="#fff" strokeWidth="1"></path>
                                        <path id="Path_2" d="M142.97,151.08a3.144,3.144,0,0,1,3.166-3.114h2.191a.807.807,0,1,1,0,1.613h-2.191a1.515,1.515,0,0,0-1.526,1.5v12.386l3.213-2.254a3.882,3.882,0,0,1,2.241-.705h9.92a1.515,1.515,0,0,0,1.526-1.5v-.723a.82.82,0,0,1,1.641,0v.723a3.144,3.144,0,0,1-3.166,3.114h-9.92a2.232,2.232,0,0,0-1.288.405l-4.51,3.163a.822.822,0,0,1-1.3-.657V151.08Z" transform="translate(-142.97 -141.711)" fill="#fff" stroke="#fff" strokeWidth="1"></path>
                                    </g>
                                    <g id="help-sing" transform="translate(16.738 3.256)">
                                        <path id="Path_3" d="M106.612,0a1.876,1.876,0,0,0-1.771,1.962.485.485,0,1,0,.965,0,.811.811,0,1,1,1.613,0,.854.854,0,0,1-.806.893.51.51,0,0,0-.482.534V4.595a.485.485,0,1,0,.965,0V3.849a1.946,1.946,0,0,0,1.289-1.887A1.876,1.876,0,0,0,106.612,0Z" transform="translate(-104.841)" fill="#fff"></path>
                                        <path id="Path_4" d="M187.719,373.7a.858.858,0,1,0,.872.858A.865.865,0,0,0,187.719,373.7Z" transform="translate(-185.948 -368.105)" fill="#fff"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </span>
                </a>
            )}
            {isOpen && (
                <div className="hide chat-section" style={{ position: "fixed", width: "300px", height: "450px", right: "80px", bottom: "0", zIndex: "4", boxShadow: "0 12px 34px 0 rgba(0,0,0,.175)" }}>
                    <button className="chatWindowCloseBtn border-radius-small" style={{ padding: "10px", position: "absolute", right: "12px", top: "10px", transition: "transform .2s ease-in-out", zIndex: "99", width: "44px", height: "44px", display: "block", background: "#e76060", border: "none" }} onClick={toggleChat}>
                        <svg width="24px" height="24px" style={{ fill: 'white', stroke: 'white', display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 100 100">
                            <rect x="19.49" y="46.963" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 121.571 49.0636)" width="62.267" height="5.495"></rect>
                            <rect x="18.575" y="47.876" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 49.062 121.5686)" width="62.268" height="5.495"></rect>
                        </svg>
                    </button>
                    <iframe id="crisp-chat-iframe" className="border-radius-small" src="https://go.crisp.chat/chat/embed/?website_id=6778d586-895f-4221-a581-488068baaac5&amp;locale=en"></iframe>
                </div>
            )}
        </div>
    );
};

export default STC_ChT;