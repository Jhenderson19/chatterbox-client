// This File is the model for messages

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
  },

  post: function(text) {
    console.log('Messages.js ' + text);
    var messageToSend = new Message(App.username, text);
    Parse.create(messageToSend);
  }

};

class Message {
  constructor(username, text, roomName) {
    this.username = username;
    this.text = text;
    this.roomName = roomName;
  }
}