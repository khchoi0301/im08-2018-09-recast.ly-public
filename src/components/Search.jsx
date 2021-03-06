var Search = (props) => (
  <form className="search-bar form-inline" onSubmit={(evt) => { evt.preventDefault(); props.onSearch($('.form-control').val()); }}>
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down" >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </form>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


//onClick={() => { props.onSearch($('.form-control').val()); }}