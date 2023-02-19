var Shop = React.createClass({
  
    propTypes: { list: React.PropTypes.array.isRequired},

		getInitialState: function() {
			return { 
				selected: null,
				list: this.props.list
			};
		},

		selected: function(id){
			this.setState( {selected:id} );
		},

		deleted: function(id){
			let list = this.state.list
			this.setState( {list:[...list].filter(el => el.id !== id)} );

		},
  
    render: function() {

			console.log(this.state)


			let arr = this.state.list.map( v => {
				
				let obj = {
          id:v.id,
          key:v.id,
          name:v.name, 
          url:v.url, 
          price:v.price, 
          qty:v.qty,
					cbSelected:this.selected, 
					cbDeleted:this.deleted, 
        }

				
				this.state.selected == v.id && (obj['selected'] = 'selected')

        return React.createElement(Product, obj)
			});

			if(!arr.length) return React.DOM.h1(null, "Товаров не найдено")

			return React.DOM.table(null,
        
				React.DOM.thead(null,
            React.DOM.tr(null,
                React.DOM.th(null, "Name"),
                React.DOM.th(null, "Price"),
                React.DOM.th(null, "URL"),
                React.DOM.th(null, "Quantity"),
                React.DOM.th(null, "Control"),
            ), 
        ),
        
        React.DOM.tbody(null, arr ),
      );

			},
  
  });