var ProdWrap = React.createClass({
  
    propTypes: {

      shopName: React.PropTypes.string.isRequired,
      prods:React.PropTypes.arrayOf(
        React.PropTypes.shape({
          id: React.PropTypes.number.isRequired,
          img: React.PropTypes.string.isRequired,
          title: React.PropTypes.string.isRequired,
          price: React.PropTypes.number.isRequired,
          stock: React.PropTypes.number.isRequired,
        })
      )
    },
  
    render: function() {
  
      var arr = this.props.prods.map( v =>
        React.createElement(ProdRow, {
          id:v.id,
          key:v.id,
          title:v.title, 
          img:v.img, 
          price:v.price, 
          stock:v.stock, 
        })
      );

      return React.DOM.table({className:'table'},
        
        React.DOM.caption(null, "Товары магазина "+this.props.shopName ),
        
        React.createElement(TableHead),

        React.DOM.tbody(null, arr ),
      );
    },
  
  });