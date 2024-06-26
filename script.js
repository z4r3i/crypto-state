async function fetchData() {
  const pairs = ["BTCUSDT", "ETHUSDT", "TRXUSDT", "NOTUSDT"];
  for (const pair of pairs) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.nobitex.ir/v2/orderbook/${pair}`);
    xhr.send();
    xhr.onload = function () {
      const record = JSON.parse(xhr.responseText);
      const p = record['lastTradePrice']  ;
      document.getElementById(`${pair.toLowerCase()}`).innerHTML = p*Math.pow(10,7)/Math.pow(10,7);
    };
  }
}
fetchData();
