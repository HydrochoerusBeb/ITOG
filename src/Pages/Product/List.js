import CardOfProduct from "../../Components/CardOfProduct/CardOfProduct"

export default function List({products}) {

    {
        products.map(elem =>
            // <ProductCard  img={elem.image} title={elem.title} id = {elem.id} price = {elem.price} discount_price = {elem.discont_price}/>
            <CardOfProduct img={elem.image} title={elem.title} id = {elem.id} price = {elem.price} discount_price = {elem.discont_price}/>
            // <ProductListItem  id = {elem.id} title = {elem.title} image = {elem.image} price = {elem.price} discontPrice = {elem.discont_price} />

        )
    }

}

