import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({
    item,
    totalCount,
    setTotalCount,
    totalPrice,
    setTotalPrice,
}) => {
    const [count, setCount] = useState(0);

    const plusCount = (price) => {
        setCount(count + 1);
        setTotalCount(totalCount + 1);
        console.log(price);
        setTotalPrice(totalPrice + price);
    };

    const minusCount = (price) => {
        setCount(count - 1);
        setTotalCount(totalCount - 1);
        setTotalPrice(totalPrice - price);
    };

    return (
        <li className="item">
            <img src={item.image} className="image" />
            <div className="desc">
                <p className="name">{item.name}</p>
                <p>${item.price}</p>
            </div>
            <div className="quantity">
                <button onClick={() => minusCount(item.price)}> - </button>
                <p>{count}</p>
                <button onClick={() => plusCount(item.price)}> + </button>
            </div>
            <div className="price">
                <p>${count * item.price}</p>
            </div>
        </li>
    );
};

export default Card;
