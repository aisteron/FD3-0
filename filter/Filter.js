var Filter = React.createClass({

    propTypes: { list: React.PropTypes.array.isRequired},



		getInitialState: function() {
			return {
				sort: false,
				search: "",
				list: this.props.list
			};
		},

		sort: function(){
			this.setState( {sort:!this.state.sort}, () => this.modify() );
		},

		reset: function(){
	
			this.setState({
				sort: false,
				search: "",
				list: this.props.list
			});
		},

		search: function(event){
			this.setState( {search:event.target.value}, () => this.modify() );
		},

		modify: function(){
			let list = this.props.list
			
			this.state.sort && (list = [...list].sort())
			this.state.search.length && (list = [...list].filter(el => el.includes(this.state.search)))

			this.setState({list: list})
		},
  
    render: function() {

				console.log(this.state)

				let list = this.state.list

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