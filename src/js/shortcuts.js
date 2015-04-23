/**
* @module muttrchat/shortcuts
*/

'use strict';

(function() {
  var gui = require('nw.gui');
  var win = gui.Window.get();

  if (!('Mousetrap' in window)) {
    return;
  }

  var Mousetrap = window.Mousetrap;

  Mousetrap.bind('ctrl+shift+d', function() {
    win.showDevTools();
  });

  Mousetrap.bindGlobal('command+a', function() {
    document.execCommand('selectAll');
  });

  Mousetrap.bindGlobal('command+x', function() {
    document.execCommand('cut');
  });

  Mousetrap.bindGlobal('command+c', function() {
    document.execCommand('copy');
  });

  Mousetrap.bindGlobal('command+v', function() {
    document.execCommand('paste');
  });

})();
