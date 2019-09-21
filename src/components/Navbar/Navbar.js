import React from 'react';
import logo from '../common/assets/images/nav-logo.svg';
import icons from '../../services/icon-service';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MaticIcon from '../common/assets/images/blue_dark.svg';
import ProfileIcon from '../common/assets/images/square.png';
import wallet from "../common/assets/images/wallet.svg"
import walletConnect from "../common/assets/images/walcon.svg"
import metamask from "../common/assets/images/metamask.svg"
import portis from "../common/assets/images/portis.svg"
import './Navbar.scss';

//React Icons Start

const FaBars = icons['fa-bars'];
const FaBell = icons['fa-bell'];
const FaWindowClose = icons['fa-close'];
//Icons End

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topNav: true,
      navSmall: false,
      siginOverlay : false
    };
  }

  navBarClickHandler = () => {
    const newState = { ...this.state, topNav: !this.state.topNav };
    console.log(newState);
    this.setState(newState);
  };

  siginHandler = () => {
    this.setState({...this.state, siginOverlay: !this.state.siginOverlay});
  }

  render() {
    const { market, Address, isLanding } = this.props;

    if (isLanding) return <div></div>;

    const isSignIn = false;
    return (
      <div id="nav-bar">
        <nav
          className={this.state.topNav ? 'Navigation' : 'Navigation Responsive'}
        >
          <div className="sidebar">
            <FaWindowClose
              onClick={this.navBarClickHandler}
              className="sidebar-icon"
              style={{ color: '#fff' }}
            />
            <div className="sidebar-menu">
              {Address && (
                <a href="/Address" className="sidebar-item">
                  Address
                </a>
              )}
              {market && (
                <a href="/marketplace" className="sidebar-item enabled">
                  Marketplace
                </a>
              )}
            </div>
          </div>
          <FaBars className="FaBars" onClick={this.navBarClickHandler} />
          <a href="/" className="Navigation-logo-link">
            <img src={logo} alt="logo" className="Navigation-logo" />
          </a>
          <div className="Navigation-menu">
            {market ? (
              <a href="/marketplace" className="Navigation-item enabled">
                Marketplace
              </a>
            ) : (
              <a href="/marketplace" className="Navigation-item">
                Marketplace
              </a>
            )}
            {Address ? (
              <a href="/Address" className="Navigation-item enabled">
                Address
              </a>
            ) : (
              <a href="/Address" className="Navigation-item ">
                Address
              </a>
            )}
          </div>

          {!isSignIn ? (
            <a onClick={this.siginHandler} className="Navigation-item">
              SignIn
            </a>
          ) : (
            <div className="signedIn">
              <div className="signedIn-extra">
                <img
                  src={MaticIcon}
                  alt="MaticIcon"
                  className="signedIn-icon"
                />
                <a href="/" className="signedIn-link">
                  SWITCH TO MATIC
                </a>
              </div>
              <span className="signedIn-bell-parent">
                <FaBell className="signedIn-bell" />
              </span>

              <p className="signedIn-p">⏣ &nbsp; 500</p>
              <Link to="/wallet">
                <img
                  src={ProfileIcon}
                  alt="ProfileIcon"
                  className="signedIn-profile"
                  style={{ width: '40px', height: 'auto' }}
                />
              </Link>
            </div>
          )}
        </nav>{' '}
        {
          this.state.siginOverlay &&
            <div className="connect">
            <div className="connect-wallet">
              <div className="wallet-edge">
                <div className="edge"><img src={wallet}></img>
                </div>
              </div>
              <div className="wallet-text">
                <h1>Connect your Wallet</h1>
                <p>First of all, you need a safe placero keep your land. Choose to <br></br> connect wallet by following connection</p>
              </div>
              <span>CONNECT WITH</span>
              <div className="wallet-btn-parrent">
              <div className="wallet-btn">
                <div>
                  <a href ="#"><img src={metamask}></img><p>Meta Mask</p></a>
                </div>
                <div>
                  <a href ="#"><img src={walletConnect}></img><p>Connect Wallet</p></a>
                </div>
                <div>
                  <a href ="#"><img className="portis-svg" src={portis}></img><p>Portis</p></a>
                </div>
              </div>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

NavBar.propTypes = {};

const mapStateToProps = (state) => {
  const market = state.router.location.pathname === '/marketplace';
  const Address = state.router.location.pathname === '/address';
  const isLanding = state.router.location.pathname === '/';
  return {
    market,
    Address,
    isLanding,
  };
};

export default connect(mapStateToProps)(NavBar);
