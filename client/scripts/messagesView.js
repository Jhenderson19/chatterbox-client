// This File Describes how groups of messages should be displayed to the screen

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    MessagesView.$chats.empty();
    for (let i = 0; i < Messages.allmessages.length; i++) {
      MessagesView.$chats.append(MessageView.render(Messages.allmessages[i]));
    }
  }

};