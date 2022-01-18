import React from "react"

let Car = (props) =>{
    return(
        <div className="productData">
            <p>Marque :{props.children}</p>
            <p>Modèle :{props.model}</p>
            <p>Prix :{props.price}</p>
            <p>Boîte :</p>
        </div>
    )
}







export default Car