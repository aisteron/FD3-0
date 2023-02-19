var Filter = React.createClass({

    propTypes: { list: React.PropTypes.array.isRequired},

		initialState: {sort: false, search: ''},

		getInitialState: function() {
			return this.initialState;
		},

		sort: function(){
			this.setState( {sort:!this.state.sort} );
		},

		reset: function(){
			this.setState( this.initialState );
		},

		search: function(event){
			this.setState( {search:event.target.value} );
		},
  
    render: function() {

				console.log(this.state)

				let list = this.props.list

				this.state.sort && (list = [...list].sort())
				this.state.search.length && (list = [...list].filter(el => el.includes(this.state.search)))

  
        return React.DOM.section(null, 
            React.DOM.div({className: "row"},
							React.DOM.input({type:'checkbox', checked: this.state.sort, onClick:this.sort}),
							React.DOM.input({type:'text', value: this.state.search, onChange:this.search}),
							React.DOM.button({onClick:this.reset}, 'сброс', ),
						),
						React.DOM.ul({className:"list"},
							list.map((el,i) => React.DOM.li({key:i}, el))
						),
                 
        )

    },
  
  });