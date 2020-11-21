// This File Describes how groups of messages should be displayed to the screen

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    MessagesView.$chats.empty();
    for (let i = 0; i < Messages.allmessages.length; i++) {
      MessagesView.renderMessage(Messages.allmessages[i]);

    }
    Friends.addClasses();
  },

  renderMessage: function(message) {
    var $chat = $(MessageView.render(message));
    $chat.children('.username').on('click', function() {
      Friends.toggleStatus($chat.children('.username').text());
    });
    MessagesView.$chats.append($chat);
  }

};