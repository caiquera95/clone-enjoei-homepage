import React from 'react';
import './person.css'

import {MdKeyboardArrowRight} from 'react-icons/md'

import person1 from '../../assets/catra.jpeg'
import person2 from '../../assets/memoji-joia.png'
import person3 from '../../assets/alicia.jpeg'
import person4 from '../../assets/curry.jpeg'

export default function Person(){
    return(
        <div className='box-texts'>
            <span>um brilho hollywoodiano</span>
            <div className='texts'>
                <span>nessa calçada da fama</span>
                <p>pedir autógrafo <MdKeyboardArrowRight /> </p>
            </div>

            <div className='squad'>
                <div className='squad1'>
                    <img src={person1} className="imgPerson"/>
                    <h2>mr.catra</h2>
                </div>

                <div className='squad1'>
                    <img src={person2} className="imgPerson"/>
                    <h2>caiquera</h2>
                </div>

                <div className='squad1'>
                    <img src={person3} className="imgPerson"/>
                    <h2>alicia keys</h2>
                </div>

                <div className='squad1'>
                    <img src={person4} className="imgPerson"/>
                    <h2>stephen curry</h2>
                </div>
            </div>
        </div>
    )
}