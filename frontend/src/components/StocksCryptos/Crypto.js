import "./Crypto.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./Components/Coin";
// import { search } from "../../utils/icons";

function App() {
  const [listCoins, setListCoins] = useState(null);
  const [searchCoin, setSearchCoin] = useState("");
//continuous rendering the coins
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://openapiv1.coinstats.app/coins',
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'tBeMbaOXniKpQyNHmBbFtX87qKCtK7Xpk9Ha2pAUIR0='
      }
    };
    
    Axios
      .request(options)
      .then(function (response) {
        setListCoins(response.data.result)
        console.log("Data",response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  //filtering the coins based on search
  const searchCoins = listCoins?.filter((coin) => {
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
        {searchCoins?.map((coin) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
              rank={coin.rank}
              websiteUrl={coin.websiteUrl}
            />
          );
        })}
      </div> 
    </div>
  );
}

export default App;