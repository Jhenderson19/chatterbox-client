//This File describes how an individual message should be displayed on the screen.

var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%= username %></div>
        <div class="text"><%= text %></div>
      </div>
    `)

};