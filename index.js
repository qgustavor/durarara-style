(function() {
  if (!Object.keys) return;

  var demissed = false;
  var msg = showMessage('Clique aqui e experimente o novo estilo do chat!', {
    type: 'success',
    keep: true
  }, function() {
    if (demissed) return;
    $.getScript('https://cdn.rawgit.com/qgustavor/c7ae6ddb51243e8061e3/raw/a579c9f63dc65a1169652ff6daf2e6737fade722/drrr.js');
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