import React from 'react';
import './Popup.css';
import {AiFillCloseCircle} from 'react-icons/ai'

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className="inner-popup">
            <h1 className="close-btn" onClick={() => props.setTrigger(false)}><AiFillCloseCircle/></h1>
            {props.children}
        </div>
      
    </div>
  ) :"";
}

export default Popup
