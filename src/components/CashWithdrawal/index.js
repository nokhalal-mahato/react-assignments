import { Component } from "react";
import DenominationItem from "./DenominationItem";
import './index.css'

const denominationList=[
    {id:'id1',amount:50 },
    {id:'id2',amount:100},
    {id:'id3',amount:200    },
    {id:'id4',amount:500    },
]
class CashWithdrawal extends Component{
    state={amount:2000};

    amountSelected=(amnt)=>{
        const {amount}=this.state;
        console.log(typeof(amount));
        if(amount>amnt){
            this.setState((prevState)=>({amount:prevState.amount-amnt}));
        }
        else{
            alert('Balance is low');
        }
    }
    render(){
        return(
            <div className="cash-page">
                <div className="cash-content">
                    <div className="cash-user">
                        <div className="cash-user-profile">S</div>
                        <p className="cash-user-name">Sarah Williams</p>
                    </div>
                    <div className="cash-balance">
                        <p className="balance-text">Your Balance</p>
                        <h1 className="cash-amount">{this.state.amount}</h1>
                    </div>
                    <p className="in-rupees">In Rupees</p>
                    <div className="cash-withdraw-section">
                        <h3 className="cash-withdraw-text">Withdraw</h3>
                        <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
                        <div className="denomination-section">
                            {denominationList.map((item)=><DenominationItem key={item.id} amount={item.amount} id={item.id}  onClick={this.amountSelected}/>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CashWithdrawal;
