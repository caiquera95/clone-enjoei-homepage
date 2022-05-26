import React from 'react';
import publi from '../../assets/publi.png'

import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

import './banner.css'

export default function Banner(){
    return(
        <div className='banner'>

                <div className='arroR'>
                    <div className='arrowRight'>
                        <IoIosArrowBack />
                    </div>
                </div>

                <div className='balls'>
                    <div className='bal'>
                    </div>
                    <div className='bal'>
                    </div>
                    <div className='balActive'>
                    </div>
                    <div className='bal'>
                    </div>
                    <div className='bal'>
                    </div>
                </div>
                

                <div className='arrowL'>
                    <div className='arrowLeft'>
                        <IoIosArrowForward /> 
                    </div>

                </div>


            
            <img src={publi}/>
            
        </div>
    )
}