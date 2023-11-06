import React from "react";
import './Coin.css';
function Coin({ name, icon, price, symbol ,rank}) {
    return (
        <div className="coin">
            <h1>Name:{name}</h1>
            <img src={icon} alt="coin" />
            <h3>Price :{price}</h3>
         
            <h4>Symbol:{symbol}</h4>
            <h2>Rank:{rank}</h2>
        </div>
    )
}
export default Coin;