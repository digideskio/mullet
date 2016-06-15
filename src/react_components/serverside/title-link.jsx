var React = require('react');

var Styles = {
  title: {
    display: 'block',
    fontSize: '2em',
    fontWeight: 700,
    textAlign: 'center',
    appearance: 'none',
    boxShadow: 'none',
    border: '0px none',
    background: 'transparent none repeat scroll 0% 0%',
    margin: '0px auto'
  }
};

var TitleLink = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  getInitialState: function() {
    return {
      title: this.props.title,
      toggled: false
    };
  },
  handleClick: function(e){
    if (this.state.toggled){
      this.setState({
        title: 'ohai',
        toggled: false
      });
    } else {
      this.setState({
        title: 'haio',
        toggled: true
      });
    }
  },
  render: function() {
    return <button style={Styles.title} onClick={ this.handleClick }>{this.state.title}</button>;
  }
});

module.exports = TitleLink;
