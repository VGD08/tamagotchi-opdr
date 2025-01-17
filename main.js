const button = document.getElementById('button');
button.addEventListener('click', playMusic);

function playMusic() {
  const audio = document.getElementById('audio');
  audio.play();
}