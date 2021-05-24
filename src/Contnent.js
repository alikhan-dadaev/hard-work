
import Card from "./Card";
import React from "react";
import App from "./App";




function Contnent(products) {
    const newDatabase = products.database.map((product) => {
        return <Card
            id={product.id}
            name={product.name}
            price={product.price}
            boutght={product.bought}
            rating={product.rating}
            image={product.image}
            setBought={products.setBougth}
        />
    })
    return (
        <div className="content">
            {newDatabase}
        </div>
    );
}

export default Contnent;