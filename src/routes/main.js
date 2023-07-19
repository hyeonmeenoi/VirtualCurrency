import { useEffect, useState } from "react";
import Coin from "../components/coin";
import Loading from "../components/loading";
import "../css/main.css";

function Main() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const getCoins = async () => {
    const json = await (
      await fetch("https://api.coinpaprika.com/v1/tickers")
    ).json();
    setLoading(false);
    setCoins(json);
  };
  useEffect(() => {
    getCoins();
  }, []);
  return loading ? (
    <div class="loading_main">
      <Loading />
    </div>
  ) : (
    <div class="main_box">
      {coins.map((coin) => (
        <Coin
          id={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          rank={coin.rank}
          price={coin.quotes.USD.price}
          key={coin.id}
        />
      ))}
    </div>
  );
}

export default Main;
