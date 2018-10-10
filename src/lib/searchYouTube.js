var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true,
      q: options.query,
      maxResults: options.max,
      key: options.key,
    },
    contentType: 'application/json',
    success: (data) => {
      // console.log('succes', data.items, callback);
      // data.items.forEach((item, index) => {
      //   console.log(index);
      //   callback(item);
      // });
      callback(data.items);
    },
    error: (data) => {
      console.log('fail', data, options, callback);
    }
  });
};

window.searchYouTube = searchYouTube;

