var ProdWrap = React.createClass({
  
    propTypes: {

      shopName: React.PropTypes.string.isRequired,
      prods:React.PropTypes.arrayOf(
        React.PropTypes.shape({
          id: React.PropTypes.number.isRequired,
          title: React.PropTypes.string.isRequired,
          price: React.PropTypes.number.isRequired,
          stock: React.PropTypes.number.isRequired,
        })
      )
    },
  
    render: function() {
  
      var arr = this.props.prods.map( v =>
        React.createElement(ProdRow, {
          key:v.id,
          title:v.title, 
          price:v.price, 
          stock:v.stock, 
        })
      );

      return React.DOM.table({className:'table'},
        React.createElement(TableHead, {shopName:this.props.shopName} ),
        React.DOM.tbody( arr ),
      );
    },
  
  });