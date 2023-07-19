import { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom";
import "../css/detail.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  const { id } = useParams();
  const getCoin = async () => {
    const json = await (
      await fetch(`https://api.coinpaprika.com/v1/coins/${id}`)
    ).json();
    setCoin(json);
    setLoading(false);
  };
  useEffect(() => {
    getCoin();
  }, []);
  return loading ? (
    <div class="big_box">
      <div class="hi">
        <div class="hi2">
          <p class="card-title">Loading</p>
        </div>
      </div>
    </div>
  ) : (
    <div class="big_box">
      <div class="hi">
        <div class="hi2">
          <p class="card-title">
            {coin.name}({coin.symbol})
          </p>
          <p class="card-para">{coin.description}</p>
          <p class="card-para">
            {coin.tags && coin.tags.map((tag) => <div>#{tag.name}</div>)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
