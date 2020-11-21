// This File is the model for messages

var Messages = {
  allmessages: [],

  breakup: function(data) {
    Messages.allmessages = [];
    for (var i = 0; i < data.results.length; i++) {
      if (Messages.verify(data.results[i])) {
        if (data.results[i].roomname !== '') {
          Rooms.add(data.results[i].roomname);
        }
        var cleanRoom = Rooms.scrubbing(data.results[i].roomname);
        if (cleanRoom === RoomsView.$select.val()) {
          Messages.allmessages.push(data.results[i]);
        }
      }
    }
    MessagesView.render();
  },

  verify: function(message) {
    if ( message.username && message.text) {
      Messages.scrubbing(message);
      return true;
    }
    return false;
  },

  scrubbing: function(message) {
    // eslint-disable-next-line quotes
    const badCharacters = {'&': '&amp', '<': '&lt', '>': '&gt', '"': '&quot', "'": '&#x27'};
    let scrubbedText = '';
    _.each(message.text, function(char) {
      if (badCharacters[char] !== undefined) {
        scrubbedText += badCharacters[char];
      } else {
        scrubbedText += char;
      }
    });
    message.text = scrubbedText;

    let scrubbedName = '';
    _.each(message.username, function(char) {
      if (badCharacters[char] !== undefined) {
        scrubbedName += badCharacters[char];
      } else {
        scrubbedName += char;
      }
    });
    message.username = scrubbedName;
  },

  post: function(text) {
    console.log('Messages.js ' + text);
    var messageToSend = new Message(App.username, text, RoomsView.$select.val());
    console.log(messageToSend);
    Parse.create(messageToSend);
  }

};

class Message {
  constructor(username, text, roomName) {
    this.username = username;
    this.text = text;
    this.roomname = roomName;
  }
}