var TableHead = React.createClass({
  
    render: function() {

        
        return React.DOM.thead({className:'test'},
            React.DOM.tr(null,
                React.DOM.th({scope:"col"}, "#ID"),
                React.DOM.th({scope:"col"}, "Thumb"),
                React.DOM.th({scope:"col"}, "Title"),
                React.DOM.th({scope:"col"}, "Price"),
                React.DOM.th({scope:"col"}, "In stock"),
            ), 
        )
    },
  
  });