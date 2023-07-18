function Coin({ id, name, symbol, rank, price }) {
  console.log(symbol + price);
  return (
    <div>
      <h1>
        #{rank} {symbol} : {price}
      </h1>
      <h2>{}</h2>
    </div>
  );
}

export default Coin;
