function playSound(e) {
  console.log(e.keyCode);
  //grab the appropriate DOM based on e.keycode which should match the audio data key

  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  //in the same fashion as above find the DOM element for the div tag then add the 'class' press to it
  const key = document.querySelector(`div[data-keyCode = "${e.keyCode}"]`);

  key.classList.add("press");

  //rewind the sound just ion case the audio is already playing
  audio.currentTime = 0;
  //play the audio

  audio.play();
}

function removeTransition(e) {
  e.target.classList.remove("press");
}
const keys = [...document.querySelectorAll(".sound")];
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
