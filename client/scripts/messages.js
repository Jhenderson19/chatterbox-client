var Messages = {
  allmessages: [],

  breakup: function(data) {
    for (var i = 0; i < data.results.length; i++) {
      if (Messages.verify(data.results[i])) {
        Messages.allmessages.push(data.results[i]);
      }
    }
    MessagesView.render();
  },

  verify: function(message) {
    return message.username && message.text ? true : false;
  }

};