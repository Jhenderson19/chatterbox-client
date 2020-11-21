// This file describes how our rooms should be displayed to the screen

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', function() {
      Rooms.add(prompt('New Room'));
    });
    RoomsView.$select.on('change', function() {
      RoomsView.$select = $('#rooms select');
    });
  },

  renderRoom: function(newRoom) {
    RoomsView.$select.append(`<option value="${newRoom}">${newRoom}</option>`);
  },

};
