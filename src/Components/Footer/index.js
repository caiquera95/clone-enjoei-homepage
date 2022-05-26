import React from 'react';

import './footer.css'

import playstore from '../../assets/playstore.png'
import apple from '../../assets/applestore.png'

import logo from '../../assets/enjoei-logo.png'
import publimobile from '../../assets/t-shirt.jpeg'
import tricot from '../../assets/tricot.jpeg'

import {HiArrowSmLeft} from 'react-icons/hi'
import {AiOutlineEllipsis} from 'react-icons/ai'
import {FaRegHandPeace} from 'react-icons/fa'
import {RiChatSmile2Line} from 'react-icons/ri'

export default function Footer(){
    return(
        <div>
            <h2>*Vibrou*</h2>
                <div className='banner-footer'>

                    <div className='text-footer'>
                        <h3>Baixe agora o enjuapp</h3>
                        <span>Altas tendências nas modas em preços de oportunidade.</span>
                        <span>Tudo o que realmente import na vida do internauta.</span>

                        <div className='download-footer'>
                        <div className='down-google'>
                            <img src={playstore}/>
                            <div className='text-google'>
                                <span>DISPONÍVEL NO</span>
                                <p>Google Play</p>
                            </div>
                        </div>

                        <div className='down-ios'>
                            <img src={apple}/>
                            <div className='text-ios'>
                                <span>Baixar na</span>
                                <p>App Store</p>
                            </div>
                        </div>

                    </div>

                    
                    </div>

                    <div className='mobile'>
                        <div className='mobile-screen'>
                            <div className='mobile-header'>
                                <img src={logo}/>
                            </div>
                            <ul>
                                    <li>moças</li>
                                    <li>rapazes</li>
                                    <li>kids</li>
                                    <li>casa&tal</li>
                            </ul>

                                <input type="text" placeholder=' Busque "Animale"'></input>

                                <div className='screen-texts'>
                                    <span>Tiê solta o som</span>
                                    <div className='screen-subtext'>
                                        <p>Dó ré mi</p>
                                    </div>

                                </div>

                            <img src={publimobile} className="mobile-publi" />

                            <div className='screen-texts'>
                                <span>Adidas 50% off</span>
                                    <div className='screen-subtext'>
                                        <p>As 3 listas mais queridas</p>
                                    </div>

                            </div>

                        </div>
                    </div>

                    <div className='mobile'>
                        <div className='mobile-screen'>

                        

                            <div className='mobile-header2'>
                                <p><HiArrowSmLeft /></p>
                                <span>tricót rainbow</span>
                                <p><AiOutlineEllipsis /></p>

                                
                            </div>

                            <div className='boximage'>
                                <div className='tagOff'>
                                    -20%
                                </div>

                                <div className='tagSize'>
                                    tam P
                                </div>

                                <div className='mobile-publi2'>
                                    <img src={tricot}/>
                                </div>

                                <div className='actions'>
                                    <span className='yeah'>
                                        <FaRegHandPeace />
                                        <p>yeah-yeah</p>
                                    </span>

                                    <span className='comment'>
                                        <RiChatSmile2Line />
                                        <p>faça uma pergunta</p>
                                    </span>
                                </div>
                            </div>

                            <div className='value'>
                                <span>R$ 100</span>
                                <p className='valueOK'>R$ 80</p>
                                <div className='freight'>
                                    frete grátis
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    )
}