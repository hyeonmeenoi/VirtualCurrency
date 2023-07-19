import { Link } from "react-router-dom";
import "../css/coin.css";

function Coin({ id, name, symbol, rank, price }) {
  return (
    <Link to={`/coin/${id}`}>
      <div class="card">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="card-inner">
          <h2 clas="rank">#{rank}</h2>
          <h1 class="name">{name}</h1>
          <h2>{price < 1 ? price.toFixed(3) : Math.round(price)}$</h2>
        </div>
      </div>
    </Link>
  );
}

export default Coin;
