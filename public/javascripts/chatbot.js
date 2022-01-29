var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    messagePerson(['Hi there!', `I am 'Charlie'`, 'how can i help you']);
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    messageBot(msg);
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})


function messageBot(msg){
  let messageData = msg
  $.post("dashboard/api/messageBot", {data:messageData}, function(data) {
    messagePerson(data)
  });
}


function messagePerson(messsage){
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();
  if(typeof(messsage)==="string"){
    setTimeout(function() {
      $('.message.loading').remove();
      $('<div class="message new">' + messsage  + '</div>').appendTo($('.mCSB_container')).addClass('new');
      setDate();
      updateScrollbar();
      i++;
    }, 1000 + (Math.random() * 20) * 100);
  }else{
    setTimeout(function() {
      $('.message.loading').remove();
      for(i in messsage){
        //console.log(messsage[i])
        $('<div class="message new">' + messsage[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
        updateScrollbar();
      }
      setDate();
    },1000 + (Math.random() * 20) * 100);
  }
}