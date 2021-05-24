
import Card from "./Card";
import React from "react";
import App from "./App";




function Content(products) {
    const newDatabase = products.database.map((product) => {
        return <Card
            id={product.id}
            name={product.name}
            price={product.price}
            bought={product.bought}
            rating={product.rating}
            image={product.image}
            setBought={products.setBought}
        />
    })
    return (
        <div className="content">
            {newDatabase}
        </div>
    );
}

export default Content;