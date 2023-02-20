var Product = React.createClass({

    propTypes: {
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
      price: React.PropTypes.number.isRequired,
      qty: React.PropTypes.number.isRequired,
      cbSelected: React.PropTypes.func.isRequired,
      cbDeleted: React.PropTypes.func.isRequired,
      selected: React.PropTypes.string
    },

    select: function(event){
        event.stopPropagation();
        this.props.cbSelected(this.props.id);
    },

    delete: function(event){
        event.stopPropagation();
        window.confirm("Are you sure?") && this.props.cbDeleted(this.props.id)
        
    },
  
    render: function() {
  
        return React.DOM.tr({onClick:this.select, 'data-id': this.props.id, className: this.props.selected},

            React.DOM.td(null,this.props.name),
            React.DOM.td(null,this.props.url),
            React.DOM.td(null,this.props.price),
            React.DOM.td(null,this.props.qty),
            React.DOM.td(null,React.DOM.button({onClick:this.delete}, 'Delete')),
        );

    },
  
  });