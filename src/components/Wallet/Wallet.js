import React from 'react';
import './Wallet.scss';
import wallet from '../common/assets/images/square.png';
import blue_dark from '../common/assets/images/blue_dark.svg';
import balance from '../common/assets/images/balance-icon.svg';
class Wallet extends React.Component {
  
    render() { 
        return (<div>

                <div className="wallet">
                    <div className="wallet-img">
                    <img src={wallet}></img>
                    </div>
                    <div className="wallet-content">
                        <div className='wallet-content-row1'>
                            <span><p>WALLET</p></span>
                            <p>Wallet Address</p>
                            <span><p>0xR4WqHT9ek75iNalRbgiP2r00fsd0gf2sg1d5gd0gfd200531331</p></span>
                            <p>Balance</p>
                            <span className="row1-btn">
                                 <div><img src={balance}></img><p>1000 MANA</p></div>
                                 <div className="row1-btn-btn">
                                 <button1 className="button1">Buy More</button1>
                                 <button>TRANSFER</button>
                                 <button><img src={blue_dark}></img> <span>ADD FUND TO MATIC</span></button>
                                 </div>
                            </span>
                        </div>
                        <div className="wallet-content-row2">
                            <p className="headingP">AUTHORIZATION</p>
                            <div className="row2-divider">
                                <div className='wallet-content-row2-buy'>
                                    <span className="buysell">For buying</span>
                                    <div className="row2-buy">
                                        <span className="row2-buy-sec">
                                            <input type="checkbox"></input>
                                            <p className="outerP">ERC721 using MANA</p>
                                        </span>
                                        <p className="innerP">Authorize the <span>marketplace</span> to operate MANA on your behalf</p>
                                    </div>
                                    <div className="row2-buy">
                                        <span className="row2-buy-sec">
                                            <input type="checkbox"></input>
                                            <p className="outerP">ERC721 using MANA</p>
                                        </span>
                                        <p className="innerP">Authorize the <span>marketplace</span> to operate MANA on your behalf</p>
                                    </div>
                                    <div className="row2-buy">
                                        <span className="row2-buy-sec">
                                            <input type="checkbox"></input>
                                            <p className="outerP">ERC721 using MANA</p>
                                        </span>
                                        <p className="innerP">Authorize the <span>marketplace</span> to operate MANA on your behalf</p>
                                    </div>
                                    <div className="row2-buy">
                                        <span className="row2-buy-sec">
                                            <input type="checkbox"></input>
                                            <p className="outerP">ERC721 using MANA</p>
                                        </span>
                                        <p className="innerP">Authorize the <span>marketplace</span> to operate MANA on your behalf</p>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <span className="buysell">For Matic</span>
                                    <div className="row2-buy">
                                        <span className="row2-buy-sec">
                                            <input type="checkbox"></input>
                                            <p className="outerP">ERC721 using MANA</p>
                                        </span>
                                        <p className="outerP">Authorize the <span>marketplace</span> to operate MANA on your behalf</p>
                                    </div>
                                </div>
                                <div className="wallet-content-row2-buy">
                                <span className="buysell">For selling</span>
                                <div className="row2-buy">
                                        <span className="row2-buy-sec">
                                            <input type="checkbox"></input>
                                            <p className="outerP">ERC721 using MANA</p>
                                        </span>
                                        <p className="innerP">Authorize the <span>marketplace</span> to operate MANA on your behalf</p>
                                    </div>
                                    <div className="row2-buy">
                                        <span className="row2-buy-sec">
                                            <input type="checkbox"></input>
                                            <p className="outerP">ERC721 using MANA</p>
                                        </span>
                                        <p className="innerP">Authorize the <span>marketplace</span> to operate MANA on your behalf</p>
                                    </div>

                            </div>

                            </div>
                            
                            

                        </div>
                    </div>
                </div>

        </div>  );
    }
}
 
export default Wallet;