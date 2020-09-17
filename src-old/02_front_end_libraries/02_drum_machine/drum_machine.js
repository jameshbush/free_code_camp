(function () {
  const display = document.getElementById("display");
  const audios = Array(...document.getElementsByTagName("audio")).map(
    (audio) => ({
      audio,
      keyPress: audio.id,
      drumPad: audio.parentElement,
      sound: audio.parentElement.id,
    })
  );
  const playDisplay = (audio, sound) => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0
      audio.play();
    }
    if (sound) {
      display.innerText = sound;
    }
  };

  // play sounds on click
  audios.forEach(({ audio, drumPad, sound }) => {
    if (drumPad) {
      drumPad.addEventListener("click", () => playDisplay(audio, sound));
    }
  });

  // play sounds on keydown
  document.addEventListener("keydown", (e) => {
    audios.find(({ keyPress, audio, sound }) => {
      if (keyPress === e.key.toUpperCase()) {
        playDisplay(audio, sound);
        return true;
      }
    });
  });
})();
