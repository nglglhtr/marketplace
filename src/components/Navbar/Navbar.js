import React from 'react';
import logo from '../common/assets/images/nav-logo.svg';
import icons from '../../services/icon-service';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/popup_actions';
import Popup from '../common/popup/Popup.js';
import LoginPopup from '../common/popup/loginPopup.js';
//Images
import MaticIcon from '../common/assets/images/blue_dark.svg';
import ProfileIcon from '../common/assets/images/square.png';
import Point from '../common/assets/images/Oval.svg';
//css
import './Navbar.scss';
import { bindActionCreators } from 'redux';

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
      loading: false
    };
  }

  closePopup = () => {
    this.props.actions.login_popup_c();
  };

  navBarClickHandler = () => {
    const newState = { ...this.state, topNav: !this.state.topNav };
    console.log(newState);
    this.setState(newState);
  };

  showPopup = () => {
    this.props.actions.login_popup_o()
  };

  render() {
    const {
      market,
      address,
      isLanding,
      isWallet,
      isActivity,
      showLoginPopup,
      isSignIn,
      network,
      mana
    } = this.props;

    if (isLanding || isWallet) return <div></div>;

    const isMaticNetwork = network != 3;
    return (
      <div id="nav-bar">
        <nav
          className={
            this.state.topNav ? 'Navigation' : 'Navigation Responsive'
          }>
          <div className="sidebar">
            <FaWindowClose
              onClick={this.navBarClickHandler}
              className="sidebar-icon"
              style={{ color: '#fff' }}
            />
            <div className="sidebar-menu">
              {address && (
                <div className="sidebar-content">
                  <a href="/address" className="sidebar-item enabled">
                    Address
                  </a>
                  <a href="/marketplace" className="sidebar-item">
                    Marketplace
                  </a>
                </div>
              )}
              {market && (
                <div className="sidebar-content">
                  <a href="/address" className="sidebar-item">
                    Address
                  </a>
                  <a href="/marketplace" className="sidebar-item enabled">
                    Marketplace
                  </a>
                </div>
              )}
              {isActivity && (
                <div className="sidebar-content">
                  <a href="/address" className="sidebar-item">
                    Address
                  </a>
                  <a href="/marketplace" className="sidebar-item ">
                    Marketplace
                  </a>
                  <a href="/activity" className="sidebar-item enabled">
                    Activity
                  </a>
                </div>
              )}
              {!isActivity && (
                <div className="sidebar-content">
                  <a href="/address" className="sidebar-item">
                    Address
                  </a>
                  <a href="/marketplace" className="sidebar-item ">
                    Marketplace
                  </a>
                </div>
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
            {address ? (
              <a href="/address" className="Navigation-item enabled">
                address
              </a>
            ) : (
              <a href="/address" className="Navigation-item ">
                address
              </a>
            )}
          </div>
          {!isSignIn ? (
            <a onClick={this.showPopup} className="Navigation-item">
              SignIn
            </a>
          ) : (
            <div className="signedIn">
              {!isMaticNetwork ? (
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
              ) : (
                <div className="signedIn-extra">
                  <img src={Point} className="signedIn-icon"></img>
                  <p>Matic Network </p>
                </div>
              )}
              <span className="signedIn-bell-parent">
                <FaBell className="signedIn-bell" />
              </span>

              <p className="signedIn-p">⏣ &nbsp; {mana}</p>
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
        {showLoginPopup && (
          <Popup closePopup={this.closePopup}>
            <LoginPopup />
          </Popup>
        )}
      </div>
    );
  }
}

NavBar.propTypes = {};

const mapStateToProps = (state) => {
  const market = state.router.location.pathname === '/marketplace';
  const address = state.router.location.pathname === '/address';
  const isLanding = state.router.location.pathname === '/';
  const isWallet = state.router.location.pathname === '/wallet';
  const isActivity = state.router.location.pathname === '/activity';
  const showLoginPopup = state.popups.login_popup
  const isSignIn = state.user.is_sign_in;
  const network = state.user.network;
  const mana = state.user.mana;

  return {
    market,
    address,
    isLanding,
    isWallet,
    isActivity,
    showLoginPopup,
    isSignIn,
    network,
    mana
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
