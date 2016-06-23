import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import rootReducer from '../../redux/reducer';
import stateApp from '../../redux/reducer/stateApp'
import * as appAC from "../../redux/action/stateApp";
// import * as stateAppAC from "../../redux/action/stateApp";

import Header from "../../components/Header";
import Search from "../../components/Search";

// @connect(
//   state => ({currentNavItem: state.currentNavItem}),
//   dispatch => ({stateAppBoundAC: bindActionCreators(appAC, dispatch)})
// )
// @connect(mapStateToProps, mapActionToProps)
// export default class App extends Component {
class App extends Component {
  constructor(props) {
    super(props);
  }
  changeActiveState(currentNavItem) {
  // changeActiveState = (currentNavItem) => {
    this.props.stateAppBoundAC.changePageNum(currentNavItem);
    if(currentNavItem === 0) {
      this.props.history.push({
        pathname: '/'
      });
    } else if (currentNavItem === 1) {
      this.props.history.push({
        pathname: '/about'
      });
    } else if (currentNavItem === 2) {
      this.props.history.push({
        pathname: '/connect',
        query: {
          index: 2,
          name: 'xiaofen'
        }
      });
    }
  }

  render() {
    // console.log(this.props.location, 'location');
    const { currentNavItem, stateAppBoundAC } = this.props;
    console.log(this.props, 'props');
    return (
      <div>
        <Header currentNavItem={currentNavItem} changeActiveState={this.changeActiveState} {...this.props}/>
        <Search />
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentNavItem: state.currentNavItem
  };
}
function mapActionToProps(dispatch) {
  return {
    stateAppBoundAC: bindActionCreators(appAC, dispatch)
  };
}
export default connect(mapStateToProps, mapActionToProps)(App);
