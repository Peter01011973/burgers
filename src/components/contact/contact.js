import React from 'react';
import './contact.css';
import MapContainer from './google-map/google-map.js';
import { geolocated } from "react-geolocated";

const Contact = ({isGeolocationAvailable, isGeolocationEnabled, coords}) => {
    
    return (
        <div className='contact'>
            <div className='contact-container'>
                <div className='contact-container-map'>
                    {
                        (isGeolocationAvailable && isGeolocationEnabled && coords)
                            ? <MapContainer className='contact-container-map' coords={coords} mapStyles={{ width: '100%', height: '70vh' }} />
                            : <h3>Loading...</h3>
                    }
                </div>
                <div className = 'contact-container-row'>
                    <div className = 'contact-container-row__title'>
                        <h2> Get in Touch</h2>
                    </div>
                    <div className = 'contact-container-row__edit'>
                        <form className = 'information'>
                            <textarea cols='28' rows='9' placeholder='Enter Message'></textarea>
                            <div className = 'form-group'>
                                <input placeholder='Enter your name'/>
                                <input placeholder='Email'/>
                            </div>
                            <input placeholder='Enter Subject'/>
                            <button className = 'SENDbutton'>SEND</button>
                        </form>
                    </div>
                    <div className='contact-container-row__contactInfo'>
                        <div className = 'peiceOfInfo'>
                            <div>
                                <i className = 'fa fa-home'></i> 
                            </div>
                            <div>
                                <h3>Buttonwood, California.</h3>
                                <p>Rosemead, CA 91770</p>
                            </div> 
                        </div>
                        <div className = 'peiceOfInfo'>
                            <div>
                                <i className = 'fa fa-tablet'></i>
                            </div>
                            <div>
                                <h3>+1 253 565 2365</h3>
                                <p>Mon to Fri 9am to 6pm</p>
                            </div>                             
                        </div>
                        <div className = 'peiceOfInfo'>
                            <div>
                                <i className = "fa fa-envelope"></i> 
                            </div>
                            <div>
                                <h3>support@colorlib.com</h3>
                                <p>{`Send us your query \n anytime!`}</p>
                            </div>                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(Contact);