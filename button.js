var React = require('react');

var Like = React.createClass({
  getInitialState: function(){
    return {
      nbClick : 0,
      text    : 'Like',
      clicked : false
    }
  },

  clickHandler: function(){
    var nb = this.state.nbClick;
    this.setState({
      nbClick : nb + 1
    });
    return false;
  },
  render: function(){
    return(
      <button onClick={this.clickHandler}>
        {this.state.text} ({this.state.nbClick})
      </button>
    );
  }
});

module.exports = Like;
