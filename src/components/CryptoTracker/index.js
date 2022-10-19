import { Component } from "react";
import "./index.css";
import { TailSpin } from "react-loader-spinner";
import CryptoItem from "./CryptoItem";

class CryptoTracker extends Component {
  state = { isLoading: true, cryptoList: [], error: false };

  componentDidMount() {
    this.fetchCrypto();
  }
  fetchCrypto = async () => {
    try {
      const response = await fetch(
        "https://apis.ccbp.in/crypto-currency-converter"
      );
      if (!response.ok) {
        this.setState({ isLoading: false, error: true });
        return;
      }
      const data = await response.json();
      const updatedData = data.map((item) => ({
        id: item.id,
        currencyName: item.currency_name,
        usdValue: item.usd_value,
        euroValue: item.euro_value,
        currencyLogo: item.currency_logo,
      }));
      this.setState({ cryptoList: updatedData, isLoading: false });
    } catch (err) {
      this.setState({ isLoading: false, error: true });
    }
  };
  render() {
    const { isLoading, cryptoList, error } = this.state;
    return (
      <div className="crypto-page">
        <h1 className="crypto-main-header">CryptoCurrency Tracker</h1>
        <div className="crypto-main-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt=""
          />
        </div>

        {!isLoading && !error && (
          <div className="cryptolist-container">
            <div className="cryptolist-header">
              <h3 className="crypto-coin-type">Coin Type</h3>
              <div className="cryptolist-currency-container">
                <h3 className="cryptolist-currency">USD</h3>
                <h3 className="cryptolist-currency">EURO</h3>
              </div>
            </div>
            {cryptoList.map((item) => (
              <CryptoItem key={item.id} data={item} />
            ))}
          </div>
        )}
        {isLoading && <TailSpin />}
        {error && <h1>404 Not Found</h1>}
      </div>
    );
  }
}

export default CryptoTracker;
