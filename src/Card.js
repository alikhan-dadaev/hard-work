import React from 'react';
import Button from "./Button";


function Card(product) {
    return (
        <div className="card">

            <div className="card-image">
                <img src= {product.image} />

            </div>
            <div className="card-info">
                <div className="card-name">{product.name}</div>
                <div>{product.rating}</div>
                <div className="card-price">{product.price}Р</div>
                <Button setBought={product.setBought} id={product.id} bought={product.bought} />
            </div>


        </div>
    );
}

export default Card;