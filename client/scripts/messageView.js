// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`

      <div class="chat">
        <div class="username"><%= username %></div>
        <div class="roomname"><%= roomname %></div>
        <div class="text"><%= text %></div>
        <div class="github_handle"><%= github_handle %></div>
      </div>

    `)

};
//redenring singple message. transforing individual message to html
