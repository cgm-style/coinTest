import { useState, useEffect } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setmoney] = useState("");
  const [changePrice, setChangePrice] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  function ChangeBayCoin({ moneyprice }) {
    return coins.map((coin, keys) => {
      console.log(coin);
      if (moneyprice === true) {
        moneyprice = coin.quotes.USD.price * coin.quotes.USD.price;
      } else if (!money) {
        moneyprice = coin.quotes.USD.price * coin.quotes.USD.price;
      }
      return (
        <li key={keys}>
          {coin.name}({coin.symbol}):
          {Number(moneyprice) / coin.quotes.USD.price}
        </li>
      );
    });
  }
  const priceCheck = (e) => {
    e.preventDefault();

    let moneyprice = e.target[0].value;
    setmoney(moneyprice);
    setChangePrice(<ChangeBayCoin />);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <div>
        <h2>My Money! {!money ? "" : `i have ${money}`}</h2>
        <form onSubmit={priceCheck}>
          <input type="text" placeholder="100"></input>
        </form>
      </div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {!changePrice ? (
            <ChangeBayCoin moneyprice={true} />
          ) : (
            <ChangeBayCoin moneyprice={money} />
          )}
        </ul>
      )}
    </div>
  );
}
// 달러를 원화로 보여주는 작업 및 간단한 스타일링 까지.
export default CoinTracker;
