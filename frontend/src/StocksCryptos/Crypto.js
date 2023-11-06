import "./Crypto.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./Components/Coin";

function App() {
  const [listCoins, setListCoins] = useState([]);
  const [searchCoin, setSearchCoin] = useState("");
//continuous rendering the coins
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListCoins(response.data.coins);
      }
    );
  }, []);
 //search coins 
  const searchCoins = listCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchCoin.toLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptohead">
        <input
          type="text"
          placeholder="Search any coin"
          onChange={(event) => {
            setSearchCoin(event.target.value);
          }}
        />
      </div>
      <div className="cryptocontent">
        {searchCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
              rank={coin.rank}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;