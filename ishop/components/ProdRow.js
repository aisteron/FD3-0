var ProdRow = React.createClass({

  
    propTypes: {
			id: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired,
      img: React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired,
      stock: React.PropTypes.number.isRequired,
    },
  
    render: function() {
  
        return React.DOM.tr(null,
            React.DOM.td(null,this.props.id),
            React.DOM.td(null,
								React.DOM.img({width:40, src:this.props.img}, )
							),
            React.DOM.td(null,this.props.title),
            React.DOM.td(null,this.props.price),
            React.DOM.td(null,this.props.stock),
        );

    },
  
  });