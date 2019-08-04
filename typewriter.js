var i = 0;
var txt = 'Just keep; creating - coding - testing - learning - sharing';

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName('js-typewrite')[0].innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 65);
  }
}

setTimeout(typeWriter, 1000);