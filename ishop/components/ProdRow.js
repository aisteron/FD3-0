var ProdRow = React.createClass({

  
    propTypes: {
      title: React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired,
      stock: React.PropTypes.number.isRequired,
    },
  
    render: function() {
  
        return React.DOM.tr(null,
            React.DOM.td(null,this.props.title),
            React.DOM.td(null,this.props.price),
            React.DOM.td(null,this.props.stock),
        );
    },
  
  });