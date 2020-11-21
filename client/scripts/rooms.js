// This file is the model for our chatroom

var Rooms = {

  options: [],

  add: function(option = '') {
    let l = option.length;
    option = Rooms.scrubbing(option);
    if (Rooms.options.includes(option) || l !== option.length) {
      return;
    }
    Rooms.options.push(option);
    RoomsView.renderRoom(option);
  },

  scrubbing: function(room) {
    // eslint-disable-next-line quotes
    const badCharacters = {'&': '&amp', '<': '&lt', '>': '&gt' /*, '"': '&quot', "'": '&#x27'*/};
    let scrubbedText = '';

    _.each(room, function(char) {
      if (badCharacters[char] !== undefined) {
        scrubbedText += badCharacters[char];
      } else {
        scrubbedText += char;
      }
    });
    return scrubbedText;
  }

};