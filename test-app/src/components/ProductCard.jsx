import React from "react"

export default function ProductCard(props) {
    return (
        <div className="product-card">
            <img src={props.image} alt="product" width="100"/>
            <h2>{props.name}</h2>
            <p>Бағасы: {props.price}</p>
        </div>
    );
}