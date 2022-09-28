import { useState, useEffect } from "react";
import styles from "./App.module.css";
import "./App.css";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setmoney] = useState("");
  const [mykrmoney, setmyKrmoney] = useState("");
  const [changePrice, setChangePrice] = useState("");
  useEffect(() => {
    // coin api 불러오기
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    // 환율 api 불러오기
    fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD"
    )
      .then((moneydata) => moneydata.json())
      .then((json) => {
        setmyKrmoney(json[0].basePrice);
      });
  }, []);
  function ChangeBayCoin({ moneyprice }) {
    return coins.map((coin, keys) => {
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
      <div className={styles.bg}></div>
      <div className={styles.inner}>
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        <div>
          <h2>
            {!money
              ? ""
              : ` My Money! : ${money.toLocaleString("en")}Dollar / KRW :${(
                  money * mykrmoney
                ).toLocaleString("ko-KR")}`}
          </h2>
          <form onSubmit={priceCheck}>
            -<input type="text" placeholder="enter your money"></input>-
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
    </div>
  );
}
// 달러를 원화로 보여주는 작업 및 간단한 스타일링 까지.
export default CoinTracker;
