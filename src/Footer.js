import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import './Footer.css';

function Footer() {
    return (
            <Card>
                <CardContent className="footer">
                    <p>Precautions to be taken</p>
                    <hr/>
                    <div className="footer__container">

                        <div className="footer__inside">
                            <div className="footer__mainBox">
                                <img src="https://image.flaticon.com/icons/svg/3079/3079188.svg" alt="" width="100px"/>
                                <h4 className="footer__heading">Stay at home</h4>
                                <p>as much as you can.</p>
                            </div>
                            <div className="footer__mainBox" >
                                <img src="https://image.flaticon.com/icons/svg/2932/2932309.svg" alt="" width="100px"/>
                                <h4 className="footer__heading">Observe social distancing</h4>
                                <p>from others around you.</p>
                            </div>
                            <div className="footer__mainBox" >
                                <img src="https://image.flaticon.com/icons/svg/2913/2913409.svg" alt="" width="100px"/>
                                <h4 className="footer__heading">Wash your hands often.</h4>
                                <p>Use soap and water, or an alcohol-based hand rub.</p>
                            </div>
                            <div className="footer__mainBox" >
                                <img src="https://image.flaticon.com/icons/svg/3022/3022870.svg" alt="" width="100px"/>
                                <h4 className="footer__heading">Wear a mask</h4>
                                <p>when physical distancing is not possible.</p>
                            </div>
                            <div className="footer__mainBox" >
                                <img src="https://image.flaticon.com/icons/svg/3159/3159875.svg" alt="" width="100px"/>
                                <h4 className="footer__heading">Cover your cough / sneeze</h4>
                                <p>with your bent elbow or a tissue.</p>
                            </div>
                            <div className="footer__mainBox" >
                                <img src="https://image.flaticon.com/icons/svg/2932/2932519.svg" alt="" width="100px"/>
                                <h4 className="footer__heading">Seek medical attention</h4>
                                <p>if you have a fever, cough and difficulty breathing.</p>
                            </div>
                        </div>
                    </div>
                    
                    <p style={{marginTop:10, marginBottom:15}}>Symptoms to be note</p>
                    <hr/>
                    <div className="footer__container">
                    <h2 style={{marginTop:25, color:'#AD0B39', border:"5px double #AD0B39", padding:10}}>Most Common</h2>
                        <div className="footer__inside">
                            <div className="footer__mainBox">
                                <img src="https://image.flaticon.com/icons/svg/2966/2966394.svg" alt="" width="100px"/>
                                <h4 className="footer__heading" style={{fontWeight:500}}>Fever</h4>
                            </div>
                            <div className="footer__mainBox" >
                                <img src="https://image.flaticon.com/icons/svg/2877/2877820.svg" alt="" width="100px"/>
                                <h4 className="footer__heading" style={{fontWeight:500}}>Dry Cough</h4>
                            </div>
                            <div className="footer__mainBox" >
                                <img src="https://image.flaticon.com/icons/svg/3017/3017369.svg" alt="" width="100px"/>
                                <h4 className="footer__heading" style={{fontWeight:500}}>Fatigue</h4>
                            </div>
                            <div className="footer__mainBox" >
                                <img src="https://image.flaticon.com/icons/svg/2950/2950146.svg" alt="" width="100px"/>
                                <h4 className="footer__heading" style={{fontWeight:500}}>Sore Throat</h4>
                            </div>
                        </div>
                    </div>

                    <div className="footer__container">
                    <h2 style={{marginTop:10, marginBottom:10, border:"5px double #000", padding:10}}>Less Common</h2>
                        <div className="footer__inside">
                            <div className="footer__mainBox" >
                                <img src="https://image.flaticon.com/icons/svg/2166/2166997.svg" alt="" width="100px"/>
                                <h4 className="footer__heading" style={{color:'#000',fontWeight:500}}>Aches and Pains</h4>
                            </div>
                            <div className="footer__mainBox" >
                                <img src="https://image.flaticon.com/icons/svg/2854/2854976.svg" alt="" width="100px"/>
                                <h4 className="footer__heading" style={{color:'#000',fontWeight:500}}>Diarrhea</h4>
                            </div>
                            <div className="footer__mainBox" >
                                <img src="https://image.flaticon.com/icons/svg/2599/2599633.svg" alt="" width="100px"/>
                                <h4 className="footer__heading" style={{color:'#000',fontWeight:500}}>Conjunctivitis</h4>
                            </div>
                            <div className="footer__mainBox" >
                                <img src="https://image.flaticon.com/icons/svg/2877/2877824.svg" alt="" width="100px"/>
                                <h4 className="footer__heading" style={{color:'#000',fontWeight:500}}>Headache</h4>
                            </div>
                            <div className="footer__mainBox" >
                                <img src="https://www.flaticon.com/premium-icon/icons/svg/3150/3150804.svg" alt="" width="100px"/>
                                <h4 className="footer__heading" style={{color:'#000',fontWeight:500}}>Loss of Taste or Smell</h4>
                            </div>
                            <div className="footer__mainBox" >
                                <img src="https://image.flaticon.com/icons/svg/2913/2913552.svg" alt="" width="100px"/>
                                <h4 className="footer__heading" style={{color:'#000',fontWeight:500}}>Rash on Skin / Discoloration of Fingers or Toes</h4>
                            </div>
                        </div>
                    </div>
                   
                    <div className="footer__container" style={{width:"100%", alignItems:"flex-start"}}>
                                    <hr style={{marginBottom: 10}}/>
                                    <h4>About this Website:</h4>
                                    <p style={{marginTop: 10}}>This is a personal project made to not only understand this pandemic but also to learn and improve my programming skills.</p>
                                    <br/>
                                    <hr style={{marginBottom: 10}}/>
                                    <h4>Sources:</h4>
                                    
                                    <ol style={{marginTop: 10, marginBottom: 10}}>
                                        <li>disease.sh - Open Disease Data</li>
                                        <li>World Health Organization</li>
                                        <li>covid19 india.org</li>
                                        <li>CNN</li>
                                        <li>Google News</li>
                                    </ol>
                    </div>
                    <hr style={{marginBottom: 15}}/>

                    <div className="footer__footer">
                        <p>Made by Kush Mehta<br/> Copyright &copy; 2020</p>
                        <div className="footer__info">
                            <a href="https://github.com/kush2511" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github footer__icon"></i>
                            </a>
                            <span>&nbsp;</span>
                            <a href="https://www.instagram.com/_kush_2511/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram footer__icon"></i>
                            </a>
                        </div>

                    </div>

                </CardContent>
            </Card>
    )
}

export default Footer
