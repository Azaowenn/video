let playVid = document.querySelector('#playVid');
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let iframe = document.querySelector('.custom-video');

playVid.onclick = function() {
  playVid.classList.add('active');
  clip.classList.add('active');
  iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
};

close.onclick = function() {
  playVid.classList.remove('active');
  clip.classList.remove('active');
  iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
};



