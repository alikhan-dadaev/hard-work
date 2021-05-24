import React from 'react';

function Button(props) {

    return (
        <div className="card-button">
            <button disabled={props.bought} onClick={() => {props.setBought(props.id)}} className='btn' > Добавить в корзину</button>
        </div>
    );
};

export default Button;