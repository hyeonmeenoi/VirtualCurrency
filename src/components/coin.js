import "../css/coin.css";

function Coin({ id, name, symbol, rank, price }) {
  return (
    <div class="card">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="card-inner">
        <h2 clas="rank">#{rank}</h2>
        <h1 class="name">{name}</h1>
      </div>
    </div>
  );
}

export default Coin;
