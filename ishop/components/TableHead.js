var TableHead = React.createClass({

  
    propTypes: {
      shopName: React.PropTypes.string.isRequired,
    },



  
    render: function() {

        var thead = `
            <div>
            <caption>${this.props.shopName}</caption>
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">Thumb</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">In stock</th>
              </tr>
            </thead>

            </div>
        
        `;

        //return React.createElement(thead)
        return React.DOM.thead(null, thead)
    },
  
  });