import React, { useState,} from 'react';
import './Footer.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 


const Footer = () => {
    const [phone, setPhone] = useState('');


    const styles = {
        inputGroup: {
            display: 'flex',
            alignItems: 'center',
            fontSize: '10px',
            border: '.5px solid #9b60e8',
            borderRadius: '10px',
            backgroundColor: 'white',
            padding: '2px',
        },
        input: {
            display: 'inline-flex',
            flex: 1,
            width: '250px',
            height: '30px',
            fontSize: '20px',
            border: 'transparent',
            borderRadius: '10px',
            backgroundColor: 'white',
            color: 'black',
            outline: 'none',
            transition: 'border 0.3s ease',
        },
        inputHover: {
            borderColor: '#9b60e8',
        },
        button: {
            height: '50px',
            fontSize: '20px',
            border: '.5px transparent',
            borderRadius: '10px',
            backgroundColor: '#9b60e8',
            color: 'white',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#7b40c8',
        },
    };
    return (
    <section  id="footerContainer" style={{ display: 'block' }}>
        <section className="footer-banner" >
            <div className="banner">
                <div className="left-area">
                    <span>
                        <ul>
                            <li className="text">Cities:</li>
                            <li className="cityText">Dhaka</li>
                            <li className="cityText">Chattogram</li>
                            <li className="cityText" >Jashore</li>
                        </ul>
                    </span>
                </div>
            </div>
        </section>
        <div className="footer-left">
            <div className="footerBottom">
                <div className="list-type customer-service">
                    <p>
                        <span> </span><span>About Chaldal</span><span> </span>
                    </p>
                    <ul>
                        <span> </span>
                        <li><span  href="/t/AboutUs">Our Story</span></li>
                        <li><span  href="/t/Team">Team</span></li>
                        <li><span  href="/t/PrivacyInfo">Privacy Policy</span></li>
                        <li><span  href="/t/TermsOfUse">Terms of Use</span></li>
                        <span> </span>
                    </ul>
                </div>
                <div className="list-type customer-service">
                    <p>
                        <span> </span><span>Customer Service</span><span> </span>
                    </p>
                    <ul>
                        <span> </span>
                            <li><span  href="/t/ContactUs">Contact Us</span></li>
                            <li><span  href="/t/Help">FAQ</span></li>
                        <span> </span>
                    </ul>
                </div>
                <div className="list-type customer-service">
                    <p>
                        <span> </span><span>For Business</span><span> </span>
                    </p>
                    <ul>
                        <span> </span>
                            <li><span  href="corporate">Corporate</span></li>
                        <span> </span>
                    </ul>
                </div>
            </div>
            <div className="right-area">
            <ul>
                <li className="text">Payment Methods</li>
                    <li className="icon">
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-518/Default/components/shared/FooterForH4/images/Amex.png?q=low&webp=1&alpha=1"/>
                    </li>
                    <li className="icon">
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-508/Default/components/shared/FooterForH4/images/mastercard.png?q=low&webp=1&alpha=1"/>
                    </li>
                    <li className="icon">
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-508/Default/components/shared/FooterForH4/images/VIsa.png?q=low&webp=1&alpha=1"/>
                    </li>
                    <li className="icon bkash">
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-508/Default/components/shared/FooterForH4/images/bkash.png?v=1&q=low&webp=1&alpha=1"/>
                    </li>
                </ul>

            </div>
        </div>
        
        <div className="footer-right">
            <div className="mobileApp">
                <section id="chaldalAppsSecond">
                    <div className="chaldalAppsContent">
                    <form>
                        <div className="inputGroup" style={styles.inputGroup}>
                        <div className="phoneNumberLoginFieldSecond">
                            <div className="input">
                            <PhoneInput
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                                inputClass="phone-input"
                                placeholder='e.g. +8801672955886'
                                style={styles.input}
                            />
                            <button type="submit" style={styles.button}>
                                Get App
                            </button>
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                </section>
            </div>

            <div className="app-download-section" >
                <div>
                    <div className="wrap">
                        <div className="google_play_store" >
                            <span  href="https://play.google.com/store/apps/details?id=com.chaldal.poached" >
                                <svg id="google-play-badge" width="90px" height="40px" viewBox="0 0 194.37 57.592" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0"><defs data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0"><linearGradient id="linear-gradient" x1="-23.78" y1="4.497" x2="-23.991" y2="4.606" gradientUnits="objectBoundingBox" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.0"><stop offset="0" className="#00a0ff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.0.0"></stop><stop offset="0.007" className="#00a1ff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.0.1"></stop><stop offset="0.26" className="#00beff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.0.2"></stop><stop offset="0.512" className="#00d2ff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.0.3"></stop><stop offset="0.76" className="#00dfff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.0.4"></stop><stop offset="1" className="#00e3ff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.0.5"></stop></linearGradient><linearGradient id="linear-gradient-2" x1="-31.302" y1="12.465" x2="-31.689" y2="12.465" gradientUnits="objectBoundingBox" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.1"><stop offset="0" className="#ffe000" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.1.0"></stop><stop offset="0.409" className="#ffbd00" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.1.1"></stop><stop offset="0.775" className="orange" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.1.2"></stop><stop offset="1" className="#ff9c00" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.1.3"></stop></linearGradient><linearGradient id="linear-gradient-3" x1="-18.37" y1="7.986" x2="-18.591" y2="8.274" gradientUnits="objectBoundingBox" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.2"><stop offset="0" className="#ff3a44" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.2.0"></stop><stop offset="1" className="#c31162" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.2.1"></stop></linearGradient><linearGradient id="linear-gradient-4" x1="-18.54" y1="8.614" x2="-18.442" y2="8.741" gradientUnits="objectBoundingBox" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.3"><stop offset="0" className="#32a071" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.3.0"></stop><stop offset="0.068" className="#2da771" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.3.1"></stop><stop offset="0.476" className="#15cf74" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.3.2"></stop><stop offset="0.801" className="#06e775" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.3.3"></stop><stop offset="1" className="#00f076" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.0.3.4"></stop></linearGradient></defs><g id="Group_4439" data-name="Group 4439" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.1"><path id="Path_7217" data-name="Path 7217" d="M187.869,98.492H7.9a7.22,7.22,0,0,1-7.2-7.2V48.1a7.316,7.316,0,0,1,7.2-7.2H187.869a7.221,7.221,0,0,1,7.2,7.2V91.293A7.315,7.315,0,0,1,187.869,98.492Z" transform="translate(-0.698 -40.9)" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.1.0"></path></g><g id="Group_4441" data-name="Group 4441" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.2"><g id="Group_4440" data-name="Group 4440" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.2.0"><path id="Path_7218" data-name="Path 7218" d="M187.869,42.053a6.082,6.082,0,0,1,6.046,6.046V91.293a6.083,6.083,0,0,1-6.046,6.047H7.9A6.084,6.084,0,0,1,1.85,91.293V48.1A6.082,6.082,0,0,1,7.9,42.053H187.869m0-1.153H7.9A7.221,7.221,0,0,0,.7,48.1V91.293a7.22,7.22,0,0,0,7.2,7.2H187.869a7.22,7.22,0,0,0,7.2-7.2V48.1a7.222,7.222,0,0,0-7.2-7.2Z" transform="translate(-0.698 -40.9)" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.2.0.0"></path></g></g><g id="Group_4442" data-name="Group 4442" transform="translate(59.607 9.935)" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.3"><path id="Path_7219" data-name="Path 7219" d="M50.737,52.552a3.922,3.922,0,0,1-1.008,2.88A4.479,4.479,0,1,1,46.561,47.8a3.834,3.834,0,0,1,1.728.432,3.135,3.135,0,0,1,1.3,1.008l-.72.72a2.685,2.685,0,0,0-2.3-1.008,2.865,2.865,0,0,0-2.3,1.008,3.474,3.474,0,0,0,0,4.894,3.707,3.707,0,0,0,2.3,1.008,3.153,3.153,0,0,0,2.448-1.008,2.381,2.381,0,0,0,.72-1.726H46.561V52.121h4.175S50.737,52.406,50.737,52.552Z" transform="translate(-42.098 -47.799)" fill="#fff" stroke="#fff" strokeWidth="0.2" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.3.0"></path><path id="Path_7220" data-name="Path 7220" d="M54.281,48.953H50.25v2.736h3.6V52.7h-3.6v2.736h3.887v1.008H49.1V47.8h5.039v1.152h.144Z" transform="translate(-39.019 -47.8)" fill="#fff" stroke="#fff" strokeWidth="0.2" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.3.1"></path><path id="Path_7221" data-name="Path 7221" d="M57,56.539H55.845V48.908H53.4V47.9h5.9v1.008H57Z" transform="translate(-37.129 -47.756)" fill="#fff" stroke="#fff" strokeWidth="0.2" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.3.2"></path><path id="Path_7222" data-name="Path 7222" d="M60.6,56.539V47.9H61.75v8.639Z" transform="translate(-33.962 -47.756)" fill="#fff" stroke="#fff" strokeWidth="0.2" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.3.3"></path><path id="Path_7223" data-name="Path 7223" d="M65.9,56.539h-1.15V48.908H62.3V47.9h5.9v1.008H65.754v7.631Z" transform="translate(-33.215 -47.756)" fill="#fff" stroke="#fff" strokeWidth="0.2" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.3.4"></path><path id="Path_7224" data-name="Path 7224" d="M76.627,55.431a4.463,4.463,0,0,1-3.166,1.3,4.479,4.479,0,1,1,4.462-4.463A5.716,5.716,0,0,1,76.627,55.431Zm-5.615-.72a3.4,3.4,0,0,0,2.305,1.008,2.867,2.867,0,0,0,2.3-1.008,3.47,3.47,0,0,0,1.006-2.448,2.967,2.967,0,0,0-1.006-2.448,3.4,3.4,0,0,0-2.3-1.006,3.071,3.071,0,0,0-2.305,1.006A3.482,3.482,0,0,0,70,52.264,3.764,3.764,0,0,0,71.012,54.712Z" transform="translate(-30.267 -47.799)" fill="#fff" stroke="#fff" strokeWidth="0.2" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.3.5"></path><path id="Path_7225" data-name="Path 7225" d="M76.2,56.539V47.9h1.3l4.174,6.767h0V47.9h1.294v8.639h-1.15l-4.465-7.054h0v7.054Z" transform="translate(-27.102 -47.756)" fill="#fff" stroke="#fff" strokeWidth="0.2" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.3.6"></path></g><path id="Path_7226" data-name="Path 7226" d="M80.671,64.668a6.057,6.057,0,0,0-6.19,6.191,6.144,6.144,0,0,0,6.19,6.191,6.059,6.059,0,0,0,6.193-6.191A6.144,6.144,0,0,0,80.671,64.668Zm0,9.935a3.756,3.756,0,0,1,0-7.488,3.487,3.487,0,0,1,3.455,3.743A3.574,3.574,0,0,1,80.671,74.6ZM67.283,64.668a6.057,6.057,0,0,0-6.191,6.191,6.145,6.145,0,0,0,6.191,6.191,6.057,6.057,0,0,0,6.19-6.191A6.234,6.234,0,0,0,67.283,64.668Zm0,9.935a3.756,3.756,0,0,1,0-7.488,3.487,3.487,0,0,1,3.454,3.743A3.574,3.574,0,0,1,67.283,74.6ZM51.3,66.539V69.13h6.191a5.452,5.452,0,0,1-1.44,3.313A6.373,6.373,0,0,1,51.3,74.315,6.7,6.7,0,0,1,44.533,67.4,6.793,6.793,0,0,1,51.3,60.492a7.14,7.14,0,0,1,4.751,1.873l1.872-1.873A9.226,9.226,0,0,0,51.444,57.9a9.5,9.5,0,1,0,0,19.007,8.286,8.286,0,0,0,6.623-2.736,8.663,8.663,0,0,0,2.3-6.047,5.352,5.352,0,0,0-.145-1.584H51.3Zm65.223,2.017a5.594,5.594,0,0,0-5.183-3.887c-3.169,0-5.759,2.448-5.759,6.191a6.024,6.024,0,0,0,6.046,6.191,5.907,5.907,0,0,0,5.039-2.734l-2.014-1.44a3.514,3.514,0,0,1-3.025,1.728,3.123,3.123,0,0,1-3.024-1.873l8.205-3.454Zm-8.352,2.16a3.5,3.5,0,0,1,3.169-3.6,2.547,2.547,0,0,1,2.3,1.3Zm-6.622,5.9h2.736v-18h-2.736ZM97.085,66.108h0a4.741,4.741,0,0,0-3.312-1.44,6.187,6.187,0,0,0-5.9,6.191,5.962,5.962,0,0,0,5.9,6.047,4.134,4.134,0,0,0,3.168-1.44h.144v.864c0,2.305-1.3,3.6-3.312,3.6a3.2,3.2,0,0,1-3.025-2.16l-2.3,1.008a5.631,5.631,0,0,0,5.327,3.745c3.168,0,5.759-1.873,5.759-6.335V65.243H96.94v.865ZM94.063,74.6a3.756,3.756,0,0,1,0-7.488,3.464,3.464,0,0,1,3.312,3.743C97.229,73.018,95.789,74.6,94.063,74.6ZM129.194,58.62h-6.48v18h2.736V69.852h3.745a5.683,5.683,0,0,0,5.9-5.615A5.77,5.77,0,0,0,129.194,58.62Zm0,8.639h-3.745V61.068h3.887a3.162,3.162,0,0,1,3.166,3.024A3.427,3.427,0,0,1,129.194,67.259Zm16.556-2.59c-2.014,0-4.031.864-4.751,2.736l2.446,1.008a2.544,2.544,0,0,1,2.449-1.3,2.707,2.707,0,0,1,2.88,2.3v.145a5.721,5.721,0,0,0-2.736-.72c-2.593,0-5.183,1.438-5.183,4.031a4.219,4.219,0,0,0,4.463,4.031,4.052,4.052,0,0,0,3.455-1.728h.144v1.44h2.592V69.709C151.221,66.4,148.917,64.668,145.75,64.668Zm-.288,9.935c-.864,0-2.16-.433-2.16-1.585,0-1.44,1.584-1.872,2.88-1.872a5.584,5.584,0,0,1,2.448.574A3.258,3.258,0,0,1,145.462,74.6Zm15.26-9.5L157.7,72.874h-.144L154.387,65.1h-2.88l4.751,10.944-2.736,6.046h2.736L163.6,65.1h-2.88ZM136.537,76.617h2.734v-18h-2.734Z" transform="translate(17.377 -33.424)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.4"></path><g id="Group_4444" data-name="Group 4444" transform="translate(14.254 10.32)" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.5"><path id="Path_7227" data-name="Path 7227" d="M11.318,48.4a2.851,2.851,0,0,0-.72,2.016V82.235a2.846,2.846,0,0,0,.72,2.016l.144.144L29.171,66.543v-.289L11.318,48.4Z" transform="translate(-10.598 -47.921)" fill="url(#linear-gradient)" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.5.0"></path><path id="Path_7228" data-name="Path 7228" d="M29.545,68.94,23.5,62.893V62.6l5.9-5.9.144.144L36.6,60.875c2.016,1.152,2.016,3.024,0,4.175L29.545,68.94Z" transform="translate(-4.925 -44.271)" fill="url(#linear-gradient-2)" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.5.1"></path><path id="Path_7229" data-name="Path 7229" d="M35.143,66.948,29.1,60.9l-18,17.853c.72.72,1.728.72,3.024.144l21.021-11.95" transform="translate(-10.378 -42.424)" fill="url(#linear-gradient-3)" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.5.2"></path><path id="Path_7230" data-name="Path 7230" d="M35.143,60.5,14.122,48.544c-1.3-.72-2.305-.574-3.024.145l18,18Z" transform="translate(-10.378 -48.066)" fill="url(#linear-gradient-4)" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.5.3"></path><g id="Group_4443" data-name="Group 4443" transform="translate(0 24.379)" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.5.4"><path id="Path_7231" data-name="Path 7231" d="M35,65,14.122,76.806a2.355,2.355,0,0,1-2.88,0h0l-.144.145h0l.144.144h0a2.355,2.355,0,0,0,2.88,0L35,65Z" transform="translate(-10.378 -65)" opacity="0.2" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.5.4.0"></path><path id="Path_7232" data-name="Path 7232" d="M11.318,73.815A2.847,2.847,0,0,1,10.6,71.8v.144a2.846,2.846,0,0,0,.72,2.016v-.145Z" transform="translate(-10.598 -62.009)" opacity="0.12" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.5.4.1"></path></g><path id="Path_7233" data-name="Path 7233" d="M34.9,62.771,27.7,66.8l.144.145L34.9,62.917a2.393,2.393,0,0,0,1.44-2.016h0A2.769,2.769,0,0,1,34.9,62.771Z" transform="translate(-3.078 -42.424)" opacity="0.12" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.5.5"></path><path id="Path_7234" data-name="Path 7234" d="M14.3,48.692,42.376,64.673c.864.576,1.44,1.152,1.44,1.872h0a2.39,2.39,0,0,0-1.44-2.014L14.3,48.546c-2.016-1.152-3.6-.144-3.6,2.16v.144C10.557,48.546,12.284,47.538,14.3,48.692Z" transform="translate(-10.557 -48.068)" fill="#fff" opacity="0.25" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.0.0.0.5.6"></path></g></svg> 
                            </span>
                            </div>
                        <div className="app_store">
                            <span  href="https://itunes.apple.com/us/app/chaldal-online-grocery/id1104493220">
                                <svg id="App-Store-Badge" width="90px" height="40px" viewBox="0 0 194.372 57.592" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0"><path id="Path_7192" data-name="Path 7192" d="M187.456,57.592H6.809A6.824,6.824,0,0,1,0,50.779V6.8A6.815,6.815,0,0,1,6.809,0H187.456a6.908,6.908,0,0,1,6.915,6.8V50.779a6.917,6.917,0,0,1-6.915,6.813Z" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.0"></path><path id="Path_7193" data-name="Path 7193" d="M192.587,50.387a5.514,5.514,0,0,1-5.522,5.514H6.417A5.521,5.521,0,0,1,.89,50.387V6.412A5.528,5.528,0,0,1,6.417.89H187.065a5.52,5.52,0,0,1,5.52,5.522V50.387Z" transform="translate(0.391 0.391)" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.1"></path><g id="Group_4435" data-name="Group 4435" transform="translate(18.418 8.951)" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.2"><g id="Group_4434" data-name="Group 4434" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.2.0"><path id="Path_7194" data-name="Path 7194" d="M37.752,23.044a8.346,8.346,0,0,1,3.975-7A8.548,8.548,0,0,0,35,12.4c-2.832-.3-5.579,1.695-7.022,1.695-1.471,0-3.693-1.666-6.087-1.617a8.963,8.963,0,0,0-7.545,4.6c-3.263,5.648-.829,13.949,2.3,18.514,1.564,2.237,3.391,4.733,5.782,4.645,2.34-.1,3.214-1.49,6.037-1.49,2.8,0,3.618,1.49,6.057,1.434,2.511-.039,4.092-2.246,5.6-4.5a18.457,18.457,0,0,0,2.561-5.216A8.07,8.07,0,0,1,37.752,23.044Z" transform="translate(-12.792 -3.511)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.2.0.0"></path><path id="Path_7195" data-name="Path 7195" d="M28.609,12.1a8.215,8.215,0,0,0,1.88-5.887,8.368,8.368,0,0,0-5.411,2.8,7.818,7.818,0,0,0-1.929,5.67A6.912,6.912,0,0,0,28.609,12.1Z" transform="translate(-8.256 -6.217)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.2.0.1"></path></g></g><g id="Group_4436" data-name="Group 4436" transform="translate(61.062 25.921)" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.3"><path id="Path_7196" data-name="Path 7196" d="M58.586,37.357h-3.27L53.525,31.73H47.3l-1.706,5.627H42.41L48.578,18.2h3.81Zm-5.6-7.989-1.62-5q-.257-.767-.966-3.61h-.058q-.283,1.222-.91,3.61l-1.591,5Z" transform="translate(-42.41 -17.918)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.3.0"></path><path id="Path_7197" data-name="Path 7197" d="M68.726,28.733a7.849,7.849,0,0,1-1.9,5.571,5.57,5.57,0,0,1-4.236,1.82,4.235,4.235,0,0,1-3.923-1.96H58.6v7.278h-3.07v-14.9q0-2.214-.114-4.547h2.7l.171,2.19h.058a5.461,5.461,0,0,1,8.741-.543A7.619,7.619,0,0,1,68.726,28.733Zm-3.127.112a5.7,5.7,0,0,0-.91-3.327,3.145,3.145,0,0,0-2.672-1.363,3.192,3.192,0,0,0-2.06.753,3.493,3.493,0,0,0-1.208,1.977,4.008,4.008,0,0,0-.143.934v2.305a3.7,3.7,0,0,0,.924,2.546,3.068,3.068,0,0,0,2.4,1.038,3.146,3.146,0,0,0,2.7-1.336A5.881,5.881,0,0,0,65.6,28.846Z" transform="translate(-36.688 -16.373)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.3.1"></path><path id="Path_7198" data-name="Path 7198" d="M79.763,28.733A7.843,7.843,0,0,1,77.856,34.3a5.565,5.565,0,0,1-4.234,1.82,4.231,4.231,0,0,1-3.922-1.96h-.058v7.278h-3.07v-14.9q0-2.214-.114-4.547h2.7l.171,2.19h.058a5.461,5.461,0,0,1,8.741-.543A7.633,7.633,0,0,1,79.763,28.733Zm-3.127.112a5.7,5.7,0,0,0-.911-3.327,3.141,3.141,0,0,0-2.671-1.363,3.2,3.2,0,0,0-2.062.753,3.491,3.491,0,0,0-1.207,1.977,4.1,4.1,0,0,0-.144.934v2.305a3.7,3.7,0,0,0,.923,2.546,3.068,3.068,0,0,0,2.4,1.038,3.146,3.146,0,0,0,2.7-1.336A5.88,5.88,0,0,0,76.635,28.846Z" transform="translate(-31.833 -16.373)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.3.2"></path><path id="Path_7199" data-name="Path 7199" d="M91.67,32.067a5.108,5.108,0,0,1-1.7,3.981,7.55,7.55,0,0,1-5.219,1.677,9.133,9.133,0,0,1-4.966-1.194l.711-2.557A8.428,8.428,0,0,0,84.932,35.2a4.187,4.187,0,0,0,2.7-.785,2.555,2.555,0,0,0,.965-2.092,2.667,2.667,0,0,0-.8-1.964,7.38,7.38,0,0,0-2.643-1.48Q80.127,27,80.129,23.383a4.862,4.862,0,0,1,1.764-3.872A6.953,6.953,0,0,1,86.583,18a9.3,9.3,0,0,1,4.348.91l-.766,2.5a7.55,7.55,0,0,0-3.669-.881,3.712,3.712,0,0,0-2.528.8,2.279,2.279,0,0,0-.766,1.736,2.343,2.343,0,0,0,.878,1.876,9.934,9.934,0,0,0,2.789,1.479,9.455,9.455,0,0,1,3.637,2.328A4.853,4.853,0,0,1,91.67,32.067Z" transform="translate(-25.974 -18.003)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.3.3"></path><path id="Path_7200" data-name="Path 7200" d="M97.658,25.264H94.275v6.708q0,2.559,1.791,2.557a5.467,5.467,0,0,0,1.363-.141l.085,2.33a6.955,6.955,0,0,1-2.387.34,3.679,3.679,0,0,1-2.844-1.11,5.434,5.434,0,0,1-1.024-3.723V25.258H89.244v-2.3H91.26v-2.53l3.015-.91v3.44h3.384v2.309Z" transform="translate(-21.813 -17.338)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.3.4"></path><path id="Path_7201" data-name="Path 7201" d="M109.825,28.788a7.579,7.579,0,0,1-1.82,5.231,6.5,6.5,0,0,1-5.064,2.1A6.182,6.182,0,0,1,98.1,34.107a7.344,7.344,0,0,1-1.805-5.088,7.511,7.511,0,0,1,1.862-5.258,6.438,6.438,0,0,1,5.015-2.047,6.318,6.318,0,0,1,4.89,2.017A7.249,7.249,0,0,1,109.825,28.788Zm-3.185.1a6.209,6.209,0,0,0-.822-3.277,3.03,3.03,0,0,0-2.756-1.651,3.079,3.079,0,0,0-2.815,1.651,6.32,6.32,0,0,0-.824,3.336,6.184,6.184,0,0,0,.824,3.276,3.139,3.139,0,0,0,5.545-.029A6.252,6.252,0,0,0,106.64,28.886Z" transform="translate(-18.714 -16.371)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.3.5"></path><path id="Path_7202" data-name="Path 7202" d="M114.879,24.695a5.33,5.33,0,0,0-.968-.085,2.9,2.9,0,0,0-2.5,1.224,4.6,4.6,0,0,0-.767,2.728v7.249h-3.068l.029-9.465q0-2.386-.115-4.35h2.674l.112,2.643h.085a4.732,4.732,0,0,1,1.535-2.19,3.712,3.712,0,0,1,2.219-.74,4.929,4.929,0,0,1,.767.056v2.929Z" transform="translate(-13.79 -16.373)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.3.6"></path><path id="Path_7203" data-name="Path 7203" d="M125.906,28.257a7.2,7.2,0,0,1-.112,1.392h-9.209a4.011,4.011,0,0,0,1.336,3.13,4.57,4.57,0,0,0,3.013.965,10.185,10.185,0,0,0,3.726-.652l.481,2.129a11.517,11.517,0,0,1-4.633.854,6.714,6.714,0,0,1-5.048-1.89,6.982,6.982,0,0,1-1.831-5.072,7.916,7.916,0,0,1,1.709-5.2,5.882,5.882,0,0,1,4.829-2.216,5.15,5.15,0,0,1,4.524,2.216A7.485,7.485,0,0,1,125.906,28.257Zm-2.927-.8a4.167,4.167,0,0,0-.6-2.36,2.68,2.68,0,0,0-2.446-1.281,2.912,2.912,0,0,0-2.443,1.251,4.61,4.61,0,0,0-.909,2.386h6.394v0Z" transform="translate(-11.089 -16.38)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.3.7"></path></g><g id="Group_4438" data-name="Group 4438" transform="translate(62.884 9.439)" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.4"><g id="Group_4437" data-name="Group 4437" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.4.0"><path id="Path_7204" data-name="Path 7204" d="M51.413,11.4a4.727,4.727,0,0,1-1.523,3.827,6.059,6.059,0,0,1-4.007,1.186,18.578,18.578,0,0,1-2.207-.112V7.042a16.288,16.288,0,0,1,2.6-.2A5.6,5.6,0,0,1,50,7.922,4.346,4.346,0,0,1,51.413,11.4Zm-1.591.042a3.441,3.441,0,0,0-.873-2.528,3.439,3.439,0,0,0-2.55-.88,6.386,6.386,0,0,0-1.215.1v7.039a7.966,7.966,0,0,0,1.019.042,3.569,3.569,0,0,0,2.674-.963A3.857,3.857,0,0,0,49.822,11.442Z" transform="translate(-43.676 -6.428)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.4.0.0"></path><path id="Path_7205" data-name="Path 7205" d="M56.94,12.1a3.723,3.723,0,0,1-.894,2.57A3.191,3.191,0,0,1,53.559,15.7a3.033,3.033,0,0,1-2.381-.992,3.613,3.613,0,0,1-.885-2.5,3.689,3.689,0,0,1,.914-2.583,3.171,3.171,0,0,1,2.465-1,3.1,3.1,0,0,1,2.4.991A3.583,3.583,0,0,1,56.94,12.1Zm-1.565.049a3.07,3.07,0,0,0-.4-1.611,1.49,1.49,0,0,0-1.353-.812,1.514,1.514,0,0,0-1.384.812,3.111,3.111,0,0,0-.4,1.638,3.07,3.07,0,0,0,.4,1.611A1.523,1.523,0,0,0,53.6,14.6a1.506,1.506,0,0,0,1.353-.826A3.05,3.05,0,0,0,55.374,12.148Z" transform="translate(-40.766 -5.647)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.4.0.1"></path><path id="Path_7206" data-name="Path 7206" d="M65.769,8.719l-2.124,6.787H62.263l-.88-2.947a22.06,22.06,0,0,1-.546-2.193H60.81a16.054,16.054,0,0,1-.546,2.193l-.934,2.947h-1.4l-2-6.787h1.551l.767,3.227q.279,1.145.461,2.178h.027q.168-.851.56-2.164l.963-3.24h1.23l.923,3.17q.335,1.16.544,2.235H63a21.351,21.351,0,0,1,.461-2.235l.824-3.17Z" transform="translate(-38.285 -5.605)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.4.0.2"></path><path id="Path_7207" data-name="Path 7207" d="M70.014,15.55H68.506V11.662q0-1.8-1.368-1.8a1.362,1.362,0,0,0-1.09.494,1.752,1.752,0,0,0-.419,1.163v4.026H64.121V10.7q0-.894-.055-1.942h1.326l.071,1.061H65.5A2.18,2.18,0,0,1,66.286,9a2.55,2.55,0,0,1,1.368-.382,2.166,2.166,0,0,1,1.579.615,2.981,2.981,0,0,1,.78,2.249Z" transform="translate(-34.709 -5.648)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.4.0.3"></path><path id="Path_7208" data-name="Path 7208" d="M71.548,16.457H70.041v-9.9h1.507Z" transform="translate(-32.081 -6.556)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.4.0.4"></path><path id="Path_7209" data-name="Path 7209" d="M79.289,12.1a3.723,3.723,0,0,1-.894,2.57A3.193,3.193,0,0,1,75.908,15.7a3.029,3.029,0,0,1-2.381-.992,3.613,3.613,0,0,1-.885-2.5,3.689,3.689,0,0,1,.914-2.583,3.172,3.172,0,0,1,2.463-1,3.112,3.112,0,0,1,2.406.991A3.589,3.589,0,0,1,79.289,12.1Zm-1.567.049a3.07,3.07,0,0,0-.4-1.611,1.487,1.487,0,0,0-1.351-.812,1.513,1.513,0,0,0-1.385.812,3.11,3.11,0,0,0-.4,1.638,3.1,3.1,0,0,0,.4,1.611,1.526,1.526,0,0,0,1.369.812,1.5,1.5,0,0,0,1.352-.826A3.037,3.037,0,0,0,77.722,12.148Z" transform="translate(-30.937 -5.647)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.4.0.5"></path><path id="Path_7210" data-name="Path 7210" d="M84.032,15.548H82.677l-.112-.782h-.04a2.325,2.325,0,0,1-1.984.936,2.043,2.043,0,0,1-1.548-.615,1.928,1.928,0,0,1-.531-1.382,2.107,2.107,0,0,1,1.042-1.9,5.394,5.394,0,0,1,2.926-.642v-.127c0-.894-.468-1.34-1.41-1.34a3.157,3.157,0,0,0-1.77.5l-.308-.991a4.353,4.353,0,0,1,2.328-.586q2.661,0,2.664,2.808v2.5A10.6,10.6,0,0,0,84.032,15.548Zm-1.566-2.332V12.169q-2.5-.043-2.5,1.368a1.022,1.022,0,0,0,.289.8A1.055,1.055,0,0,0,81,14.6a1.524,1.524,0,0,0,.923-.314,1.288,1.288,0,0,0,.547-1.068Z" transform="translate(-28.378 -5.647)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.4.0.6"></path><path id="Path_7211" data-name="Path 7211" d="M90.265,16.457H88.925l-.071-1.09h-.042a2.256,2.256,0,0,1-2.18,1.244,2.554,2.554,0,0,1-2.039-.963,3.753,3.753,0,0,1-.811-2.5,3.941,3.941,0,0,1,.88-2.669,2.7,2.7,0,0,1,2.095-.95,2.034,2.034,0,0,1,1.912.921H88.7V6.556h1.51v8.073Q90.212,15.62,90.265,16.457ZM88.7,13.6V12.463a2.221,2.221,0,0,0-.042-.475,1.718,1.718,0,0,0-.546-.914A1.483,1.483,0,0,0,87.1,10.7a1.548,1.548,0,0,0-1.327.671,2.875,2.875,0,0,0-.484,1.718,2.681,2.681,0,0,0,.464,1.634,1.553,1.553,0,0,0,1.319.67,1.454,1.454,0,0,0,1.192-.559A1.86,1.86,0,0,0,88.7,13.6Z" transform="translate(-26.037 -6.556)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.4.0.7"></path><path id="Path_7212" data-name="Path 7212" d="M99.279,12.1a3.723,3.723,0,0,1-.894,2.57A3.189,3.189,0,0,1,95.9,15.7a3.037,3.037,0,0,1-2.381-.992,3.613,3.613,0,0,1-.885-2.5,3.689,3.689,0,0,1,.914-2.583,3.172,3.172,0,0,1,2.466-1,3.1,3.1,0,0,1,2.4.991A3.584,3.584,0,0,1,99.279,12.1Zm-1.564.049a3.07,3.07,0,0,0-.4-1.611,1.492,1.492,0,0,0-1.355-.812,1.518,1.518,0,0,0-1.384.812,3.11,3.11,0,0,0-.4,1.638,3.083,3.083,0,0,0,.4,1.611,1.524,1.524,0,0,0,1.369.812,1.508,1.508,0,0,0,1.355-.826A3.063,3.063,0,0,0,97.715,12.148Z" transform="translate(-22.146 -5.647)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.4.0.8"></path><path id="Path_7213" data-name="Path 7213" d="M104.7,15.55h-1.507V11.662q0-1.8-1.369-1.8a1.357,1.357,0,0,0-1.088.494,1.752,1.752,0,0,0-.419,1.163v4.026h-1.51V10.7q0-.894-.053-1.942h1.325l.071,1.061h.042A2.2,2.2,0,0,1,100.971,9a2.555,2.555,0,0,1,1.369-.382,2.165,2.165,0,0,1,1.578.615,2.982,2.982,0,0,1,.782,2.249Z" transform="translate(-19.454 -5.648)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.4.0.9"></path><path id="Path_7214" data-name="Path 7214" d="M111.2,10.366h-1.66v3.3q0,1.257.878,1.257a2.657,2.657,0,0,0,.672-.071l.039,1.145a3.39,3.39,0,0,1-1.172.168,1.808,1.808,0,0,1-1.4-.544,2.662,2.662,0,0,1-.5-1.83V10.366h-.992V9.235h.992V7.991l1.479-.446V9.234H111.2v1.132Z" transform="translate(-15.798 -6.121)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.4.0.a"></path><path id="Path_7215" data-name="Path 7215" d="M117.284,16.457h-1.51V12.6q0-1.825-1.366-1.826a1.44,1.44,0,0,0-1.44,1.058,1.9,1.9,0,0,0-.071.543v4.082H111.39v-9.9H112.9v4.09h.029a2.281,2.281,0,0,1,2.039-1.116,2.1,2.1,0,0,1,1.552.615,3.091,3.091,0,0,1,.767,2.276v4.036Z" transform="translate(-13.896 -6.556)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.4.0.b"></path><path id="Path_7216" data-name="Path 7216" d="M123.051,11.838a3.644,3.644,0,0,1-.056.684h-4.525a1.979,1.979,0,0,0,.655,1.536,2.244,2.244,0,0,0,1.48.475,4.988,4.988,0,0,0,1.83-.321l.236,1.048a5.678,5.678,0,0,1-2.278.419,3.292,3.292,0,0,1-2.478-.929,3.421,3.421,0,0,1-.9-2.492,3.884,3.884,0,0,1,.838-2.556,2.886,2.886,0,0,1,2.373-1.088A2.524,2.524,0,0,1,122.444,9.7,3.614,3.614,0,0,1,123.051,11.838Zm-1.44-.39a2.031,2.031,0,0,0-.292-1.159,1.318,1.318,0,0,0-1.2-.629,1.433,1.433,0,0,0-1.2.615,2.284,2.284,0,0,0-.448,1.173h3.142Z" transform="translate(-11.422 -5.651)" fill="#fff" data-reactid=".27cfmrd12rw.b.2.0.0.d.2.1.0.0.1.0.0.4.0.c"></path></g></g></svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-section" >
                <div className="phone-number">
                    <div className="wrap">
                        <span>
                            <svg width="12px" height="12px" viewBox="0 0 18 18.038">
                                <g id="phone-call" transform="translate(-0.539)">
                                    <g id="Group_9772" data-name="Group 9772" transform="translate(0.539 0)">
                                        <path id="Path_50085" data-name="Path 50085" d="M18.067,13.238,15.55,10.721a1.674,1.674,0,0,0-2.787.629,1.713,1.713,0,0,1-1.978,1.079A7.762,7.762,0,0,1,6.11,7.754,1.629,1.629,0,0,1,7.189,5.776a1.674,1.674,0,0,0,.629-2.787L5.3.472a1.8,1.8,0,0,0-2.427,0L1.166,2.18c-1.708,1.8.18,6.563,4.405,10.788s8.99,6.2,10.788,4.405l1.708-1.708A1.8,1.8,0,0,0,18.067,13.238Z" transform="translate(-0.539 0)" fill="#5e5e5e"></path>
                                    </g>
                                </g>
                            </svg>
                        </span>
                        <span>  </span>
                        <span className="number">
                            <span>16710</span>
                        </span>
                        <span>     </span>
                    </div>
                </div>
                <div className="email-address" >
                    <span>   </span>
                    <span className="pre-text">  or  </span>
                    <span className="email"><span  href="mailto:support@chaldal.com">support@chaldal.com</span></span>
                </div>
            </div>

        </div>

        <section id="footerSocial">
            <div className="copyright-text">© 2013 Chaldal Limited</div>
            <div className="iconContainer">
                <div className="icons">
                    <div className="icon">
                        <span  href="https://www.facebook.com/chaldalcom">
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-518/Default/components/shared/FooterForH4/images/facebookImage.png?q=low&webp=1&alpha=1"/>
                        </span>
                    </div>
                    <div className="icon">
                        <span  href="https://twitter.com/chaldal">
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-508/Default/components/shared/FooterForH4/images/twitter.png?q=low&webp=1&alpha=1"/>
                        </span>
                    </div>
                    <div className="icon">
                        <span  href="https://www.instagram.com/chaldal_bd/">
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-508/Default/components/shared/FooterForH4/images/instaImage.png?q=low&webp=1&alpha=1"/>
                        </span>
                    </div>
                </div>
                <div className="localeContainer">
                    <span className="globeIcon">
                        <svg width="15px" height="15px" viewBox="0 0 19.771 19.771">
                        <g id="Layer_2" transform="translate(-5.5 -5.5)">
                            <path id="Path_68042" d="M23.818,20.547a9.84,9.84,0,0,0,1.454-5.161h0a9.84,9.84,0,0,0-1.454-5.161l-.005-.008a9.886,9.886,0,0,0-16.853,0l-.005.009a9.889,9.889,0,0,0,0,10.322l.006.009a9.886,9.886,0,0,0,16.853,0Zm-7.168,3.03a2.4,2.4,0,0,1-.642.443,1.449,1.449,0,0,1-1.243,0,3.026,3.026,0,0,1-1.121-.987,8.836,8.836,0,0,1-1.277-2.77q1.508-.093,3.02-.095t3.02.095a11.152,11.152,0,0,1-.542,1.491,5.732,5.732,0,0,1-1.215,1.823ZM6.63,15.941h3.987a19.617,19.617,0,0,0,.36,3.313q-1.635.144-3.262.4A8.715,8.715,0,0,1,6.63,15.941Zm1.086-4.819q1.626.252,3.263.4a19.583,19.583,0,0,0-.361,3.313H6.63a8.715,8.715,0,0,1,1.086-3.708Zm6.406-3.928a2.4,2.4,0,0,1,.642-.443,1.449,1.449,0,0,1,1.243,0,3.026,3.026,0,0,1,1.121.987,8.836,8.836,0,0,1,1.277,2.77q-1.508.093-3.02.095t-3.02-.095a11.15,11.15,0,0,1,.542-1.491,5.732,5.732,0,0,1,1.215-1.823ZM24.141,14.83H20.154a19.618,19.618,0,0,0-.36-3.313q1.635-.144,3.262-.4A8.715,8.715,0,0,1,24.141,14.83ZM12.1,19.168a18.371,18.371,0,0,1-.367-3.227h7.315a18.367,18.367,0,0,1-.366,3.227q-1.644-.108-3.291-.11T12.1,19.168ZM18.676,11.6a18.373,18.373,0,0,1,.367,3.227H11.728a18.368,18.368,0,0,1,.366-3.227q1.644.108,3.291.11T18.676,11.6Zm1.477,4.338h3.988a8.715,8.715,0,0,1-1.086,3.708q-1.626-.252-3.263-.4a19.582,19.582,0,0,0,.361-3.313ZM22.389,10.1q-1.422.205-2.852.325a12.667,12.667,0,0,0-.661-1.865,7.882,7.882,0,0,0-.92-1.565A8.773,8.773,0,0,1,22.389,10.1ZM9.181,9.181a8.772,8.772,0,0,1,3.633-2.187c-.021.027-.042.053-.063.08a10.14,10.14,0,0,0-1.515,3.35Q9.806,10.3,8.382,10.1a8.847,8.847,0,0,1,.8-.919Zm-.8,11.491q1.422-.205,2.852-.325a12.667,12.667,0,0,0,.661,1.865,7.883,7.883,0,0,0,.92,1.565,
                                8.773,8.773,0,0,1-4.432-3.105Zm13.208.919a8.772,8.772,0,0,1-3.633,2.187c.021-.027.042-.053.063-.08a10.14,10.14,0,0,0,1.515-3.35q1.43.121,2.854.325a8.847,8.847,0,0,1-.8.919Z"
                                transform="translate(0 0)">
                            </path>
                            </g>
                        </svg>
                        </span>
                        <span className="text">English (EN)</span>
                </div>
            </div>
        </section>
</section>
    );
};

export default Footer;
