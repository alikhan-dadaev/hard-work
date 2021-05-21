
import Logo from "./Logo/Logo";
import Card from "./Card";




function Contnent(product) {


    const newDatabase = product.database.map((product) => {
        return <Card
            id = {product.id}
            name = {product.name}
            price = {product.price}
            boutght = {product.bought}
            rating  = {product.rating}
            image = {product.image}
        />
    })
    return (
        <div className="content">
            {newDatabase}
        </div>
    );
}

export default Contnent;