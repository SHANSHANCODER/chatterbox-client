// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

  },

  render: function(datatoberendered) {
    for (var i = 0; i < Messages._data.length; i ++) {
      // console.log(Messages._data[i]);
      this.renderMessage(Messages._data[i]);
    }
    // This will iterate over message collection
    // Apply renderMessage to each message to render all of them
    // TODO: Render _all_ the messages.
  },

  renderMessage: function(message) {
    var test2 = MessageView.render(message);
    // = {
    //   username: 'shawndrost',
    //   text: 'trololo',
    //   roomname: '4chan'
    // }

    $testMessage = $(test2);
    $testMessage.appendTo('#chats');





    // var $body = $("body")
    // MessageView.render({username:`${message}`}).appendTo($body)
    // console.log("TEST MESSAGE", $testMessage);
    // //single message and append it to the messageview
    // var $body = $("body")
    // $testMessage.appendTo("body");
    //transforming each message object to something
    // TODO: Render a single message.
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};


//controller?