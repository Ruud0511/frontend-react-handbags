import React from "react";

function Productcard( {labelTag, productName, productImage, productPrice}) {
    return (
        <article className="product">
            <span>{labelTag}</span>
            <img src={productImage} alt={productName}/>
            <p>{productName}</p>
            <h4>€ {productPrice} ,-</h4>
        </article>
    )
}

export default Productcard;