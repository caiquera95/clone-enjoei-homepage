import React from 'react';
import logo from '../../assets/enjoei-logo.png';

import {BsSearch, BsQuestionCircle, BsInbox, BsBag} from 'react-icons/bs';
import {AiOutlineUser} from 'react-icons/ai'
import {IoHelpCircleOutline} from 'react-icons/io5'
import {VscQuestion} from 'react-icons/vsc'

import './search.css'

export default function Search(){
    return(
        <div className='container'>
            <div className='info'>
                <img src={logo} className="logo" />

                <form>
                    <div className='boxxsearch'>
                        <input type="text" placeholder=' Busque "Animale"'/>
                        <BsSearch />
                    </div>
                </form>
                
                <ul>
                    <li>moças</li>
                    <li>rapazes</li>
                    <li>kids</li>
                    <li>casa&tal</li>
                    <li>reais oficiais</li>
                    <li>enjoei pro</li>

                    <li className='separator'>|</li>

                    <li> <BsQuestionCircle /></li>
                    <li> <BsInbox/> </li>
                    <li> <BsBag /> </li>
                    <li> <AiOutlineUser/> </li>
                </ul>

                <button>quero vender</button>
            </div>
        </div>
    )
}