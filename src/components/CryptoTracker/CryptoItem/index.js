import { Component } from "react";
import './index.css';

class CryptoItem extends Component{
    render(){
        const {data}=this.props;
        return (
          <div className="crypto-item">
            <div className="crypto-item-logo">
              <img src={data.currencyLogo} alt={data.currencyName} />
              <p className="cryptoitem-name">{data.currencyName}</p>
            </div>
            <div className="cryptolist-currency-container">
              <p className="cryptolist-currency">{data.usdValue}</p>
              <p className="cryptolist-currency">{data.euroValue}</p>
            </div>
          </div>
        );
    }
}

export default CryptoItem;