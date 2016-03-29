(function() {
  if (!Object.keys) return;

  var demissed = false;
  var msg = showMessage('Clique aqui e experimente o novo estilo do chat!', {
    type: 'success',
    keep: true
  }, function() {
    if (demissed) return;
    console.log('ok');
  });

  var interval = setTimeout(function() {
    demissed = true;
    msg.remove();
  }, 15e3);

  $('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>')
    .appendTo(msg.element.addClass('alert-dismissible'))
    .click(function() {
      demissed = true;
      msg.remove();
      return false
    });
}());