import React from 'react';
export default class Hearder extends React.Component {
  constructor(props) {
    super(props);
  }

  createNav(navList) {
    const createLi = [];
    navList.map((list, idx) => {
      createLi.push(<li className={this.props.currentNavItem === idx ? 'active' : ''} onClick={this.props.changeActiveState.bind(this, idx)}>{list}</li>);
    });
    return (<ul>{createLi}</ul>)
  }
  render() {
    const navList = ['首页', '关于我', '联系'];
    return (
      <div className="navWrap">
        <div className="container">
          {this.createNav(navList)}
        </div>
      </div>
    );
  }
}
