import React from 'react';
// import ReactDOM from 'react-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '11'
    };
  }
  // handleChangeName(evt) {
  //   this.setState({
  //     inputValue: evt.target.value
  //   });
  // }
  handleSearch() {
    const name = this.refs.inputValue.value;
    if (name === "") {
      return;
    }
    this.props.sendAction(name);
  }
  render() {
    // console.log(this.props, 'props');
    return (
      <div className="container">
        <input type="text" ref="inputName" placeholder="enter the name you wanna search"/>
        <button onClick={this.handleSearch.bind(this)}>Add</button>
      </div>
    );
  }
}
