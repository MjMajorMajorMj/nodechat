$(document).ready(initializeApp);

function initializeApp() {
    console.log("Chat started"); 
    var socket = io();
    $('.submitMsgBtn').click(function () {
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('chat message', function (msg) {
        $('#messages').append($('<li>').text(msg));
    });
}