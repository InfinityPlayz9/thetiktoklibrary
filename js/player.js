var master = document.createElement('input');
master.type = 'range';
master.min = 0;
master.max = 1;

master.onchange = function(event) {
  var elements = document.querySelectorAll('audio, video');
  for (var i = 0; i < elements.length; i++) {
    elements[i].volume = master.value;
  }
};

