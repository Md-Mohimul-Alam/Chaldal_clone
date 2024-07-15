import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';

const LoginModal = ({ isOpen, onClose }) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-dialog">
                <div className="modal-title">Login</div>
                <button className="close" onClick={onClose}>
                    <IoClose size={20} />
                </button>
                <div className="modal-content">
                    <div className="facebook-login">
                        <button className="facebook-login-button login-btn">
                            <FaFacebookF size={20} style={{ fill: 'white', stroke: 'white' }} />
                            <div className="button-text">
                                <span>Sign Up or Login with <b>Facebook</b></span>
                            </div>
                        </button>
                    </div>
                    <button className="login-btn email-login-btn">
                        <svg style={{ display: 'inline-block', verticalAlign: 'middle' }} width="25px" height="25px" viewBox="0 0 491.52 491.52">
                            <rect y="85.914" style={{ fill: '#F6C358' }} width="491.52" height="319.693" />
                            <polygon style={{ fill: '#FCD462' }} points="245.76,217.258 491.52,405.604 0,405.604 " />
                            <polygon style={{ fill: '#DC8744' }} points="245.76,291.673 0,85.916 491.52,85.916 " />
                            <polygon style={{ fill: '#FCD462' }} points="245.76,274.261 0,85.916 491.52,85.916 " />
                        </svg>
                        <span>Login with <b>Email</b></span>
                    </button>
                    <div className="or-container"><span>or</span></div>
                    <div className="login-with-phone-message">PLEASE ENTER YOUR MOBILE PHONE NUMBER</div>
                    <form>
                        <div className="phone-number-input-container">
                            <div className="phone-number-login-field">
                                <div className="input">
                                    <div className="country-selector">
                                        <select>
                                            {/* Populate country codes here */}
                                            <option value="AF">Afghanistan (+93)</option>
                                            <option value="AL">Albania (+355)</option>
                                            <option value="DZ">Algeria (+213)</option>
                                            {/* Add other countries here */}
                                        </select>
                                    </div>
                                    <input
                                        type="text"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                        placeholder="Phone number"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
