// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message
    //jquery ajax
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: { order: '-createdAt' }, //give server information about the request
      contentType: 'application/json', // same as the line above, called header// can see in the development tool, under filter
      success: successCB, // might be the escaping method
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to post messages', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' }, //give server information about the request
      contentType: 'application/json', // same as the line above, called header// can see in the development tool, under filter
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }


};