// import React from 'react';
// import ReactDOM from 'react-dom';   // 넣으면 문제됨
// import VideoList from './VideoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: window.exampleVideoData[0],
      info: [],
      word: 'code'
    };
    // this.handleOnclick = this.handleOnclick.bind(this);
    // this.setFirstPage = this.setFirstPage.bind(this);
    // this.onSearch = this.onSearch.bind(this);
  };

  componentDidMount() {
    console.log(1, this.state.word);
    // this.props.searchYouTube({}, this.setFirstPage);
    this.props.searchYouTube({ key: window.YOUTUBE_API_KEY, query: this.state.word, max: 5 }, this.setFirstPage);

  };

  onSearch = (searched) => {
    console.log(0, searched, this.state.searched);
    this.setState({
      word: searched
    });
    this.props.searchYouTube({ key: window.YOUTUBE_API_KEY, query: searched, max: 5 }, this.setFirstPage);
  }

  setFirstPage = (items) => {
    this.setState({
      title: items[0],
      info: items
    });
  }

  handleOnclick = (video) => {
    console.log(2, video, this.state.title);
    this.setState({
      title: video//this.props.searchYouTube[num]
    });
  }

  render() {
    return (
      <div>
        <Nav onSearch={this.onSearch} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.title} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.info} onClick={this.handleOnclick} />
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<App searchYouTube={window.exampleVideoData} />, document.getElementById('app'));
// ReactDOM.render(<App />, document.getElementById('app'));


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
