var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    for (let i = 0; i < Messages.allmessages.length; i++) {
      MessagesView.$chats.append(MessageView.render(Messages.allmessages[i]));
    }
  }

};