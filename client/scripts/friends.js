// This file is the Model for friends lists

var Friends = {

  besties: {},

  toggleStatus: function(person) {
    console.log(person);
    if (!Friends.besties[person]) {
      Friends.besties[person] = true;
    } else {
      delete Friends.besties[person];
    }
  },

  addClasses: function() {
    var allChats = $('.chat');
    for (var i = 0; i < allChats.length; i++) {
      var $chat = $(allChats[i]);
      if (Friends.besties[$chat.children('.username').text()]) {
        $chat.children('.username').addClass('friend');
        $chat.children('.text').addClass('friendText');
      }
    }
  }
};