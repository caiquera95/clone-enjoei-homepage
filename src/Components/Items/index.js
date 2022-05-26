import React from 'react';
import './items.css'

import {MdKeyboardArrowRight} from 'react-icons/md'

import logo from '../../assets/enjoei-logo.png'
import dress from '../../assets/dress.jpg'
import jeans from '../../assets/jeans.jpg'
import hat from '../../assets/hat.jpg'
import sandal from '../../assets/sandal.jpg'
import book from '../../assets/book.jpg'
import shirt from '../../assets/shirt.jpg'


export default function Items(){
    return(
        <div className='box-texts'>
            <span>digite ZARINHA</span>
            <div className='texts'>
                <span>para R$ 30 acima de R$ 150</span>
                <p>corre! <MdKeyboardArrowRight /> </p>
            </div>


            <div className="parent">
                <div className="foto-grande"> <img src={dress}/> </div>
                <div className="foto-grande-2"><img src={jeans}  /> </div>
                {/* 376x376 */}

                <div className="foto-1"> <img src={hat}/> </div> 
                <div className="foto-2"> <img src={sandal}/> </div>
                <div className="foto-3"> <img src={book}/> </div>
                <div className="foto-4"> <img src={shirt}/> </div>
                {/* 176x176 */}
            </div>
        </div>
    )
}