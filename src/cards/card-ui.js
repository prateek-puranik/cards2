import React from 'react'

import './card-style.css';
const Card=props=>{

    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc}alt="Image1" className='card-img-top'/>
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text text-secondary">
                    {props.info}
                    </p>
                    <a  style={{ textDecoration: 'none' }}href="/activity_delhi">hello</a>
                </div>
            </div>
        </div>



    );
}
export default Card;