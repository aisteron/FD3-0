return(
  <>
    <h3>Edit existing product</h3>
    <div className="edit">
      <div className="row">
        ID: {id}
      </div>
      <div className="row">
        <label>
          <span>Name</span>
          <input type="text" value={name} onChange={this.validate} id="name"/>
        </label>

        <Error state={this.state} name="name"/>
        
      </div>
      <div className="row">
        <label>
          <span>Price</span>
          <input type="text" defaultValue={price} onChange={this.validate} id="price"/>
        </label>

        
        <Error state={this.state} name="price"/>
        
        
      </div>
      <div className="row">
        <label>
          <span>URL</span>
          <input type="text" defaultValue={url} onChange={this.validate} id="url"/>
        </label>
        <Error state={this.state} name="url"/>
      </div>
      <div className="row">
        <label>
          <span>Qty</span>
          <input type="text" defaultValue={qty} onChange={this.validate} id="qty"/>
        </label>

        
        <Error state={this.state} name="qty"/>
      </div>
    </div>
    <div className="buttons">
      <button className="save" disabled={this.state.errors.length} onClick={this.save}>Save</button>
      <button className="cancel" onClick={this.cancel}>Cancel</button>
    </div>
  </>

) 