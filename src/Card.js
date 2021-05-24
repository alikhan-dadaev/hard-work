import React from 'react';
import Button from "./Button";


function Card(props) {
    return (
        <div className="card">

            <div className="card-image">
                <img src= {props.image} />

            </div>
            <div className="card-info">
                <div className="card-name">{props.name}</div>
                <div>{props.rating}</div>
                <div className="card-price">{props.price}Р</div>
                <Button setBought={props.setBought} id={props.id} bought={props.bought} />
            </div>


        </div>
    );
}

export default Card;