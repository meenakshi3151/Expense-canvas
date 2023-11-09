import React from "react";
import './Coin.css';
function Coin({ name, icon, price, symbol ,rank,websiteUrl}) {
    const saveCoin=()=>{
       //it will save the coin in the person's Account 
    }
    return (

        <div className="coin">
            {/* Adding a button so that we can pin a particular cryptocurrency */}
            <button onClick={saveCoin}><span>ADD</span></button>
            <h2>Name:{name}</h2>
            <img src={icon} alt="coin" />
            <h3>Price :{price}</h3>
         
            <h4>Symbol:{symbol}</h4>
            <h2>Rank:{rank}</h2>
            {/* <h2>Website Url:{websiteUrl}</h2> */}
            <a href={websiteUrl}>{websiteUrl}</a>
        </div>
    )
}
export default Coin;