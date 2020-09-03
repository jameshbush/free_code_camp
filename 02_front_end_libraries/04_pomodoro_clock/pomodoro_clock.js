(function () {
  const FIVE_MINUTES = 60 * 5;
  const TWENTY_FIVE_MINUTES = 60 * 25;
  const ONE_SECOND = 1;
  const ONE_MINUTE = 60;
  const SIXTY_MINUTES = 60 * 60;

  const DEFAULT_SESSION_LENGTH = TWENTY_FIVE_MINUTES;
  const DEFAULT_BREAK_LENGTH = FIVE_MINUTES;
  // const DEFAULT_SESSION_LENGTH = ONE_SECOND;
  // const DEFAULT_BREAK_LENGTH = ONE_SECOND;

  const $timerLabel = document.getElementById("timer-label");
  const $timeLeft = document.getElementById("time-left");
  const $breakLength = document.getElementById("break-length");
  const $sessionLength = document.getElementById("session-length");
  const $start_stop = document.getElementById("start_stop");
  const $reset = document.getElementById("reset");
  const $breakIncrement = document.getElementById("break-increment");
  const $breakDecrement = document.getElementById("break-decrement");
  const $sessionIncrement = document.getElementById("session-increment");
  const $sessionDecrement = document.getElementById("session-decrement");
  const $beep = document.getElementById("beep");

  let timeLeft;
  let breakLength;
  let sessionLength;
  let timer;
  let isSession;

  const setup = () => {
    timeLeft = DEFAULT_SESSION_LENGTH;
    sessionLength = DEFAULT_SESSION_LENGTH;
    breakLength = DEFAULT_BREAK_LENGTH;
    timer = null;
    isSession = true;
  };

  const reset = () => {
    toggleOff();
    sessionLength = DEFAULT_SESSION_LENGTH;
    breakLength = DEFAULT_BREAK_LENGTH;
    startSession();
    stopAudio();
    render();
  };

  const breakIncrement = () => {
    if (breakLength + ONE_MINUTE > SIXTY_MINUTES) return;
    breakLength += ONE_MINUTE;
    if (!isSession) timeLeft += ONE_MINUTE;
    render();
  };

  const sessionIncrement = () => {
    if (sessionLength + ONE_MINUTE > SIXTY_MINUTES) return;
    sessionLength += ONE_MINUTE;
    if (isSession) timeLeft += ONE_MINUTE;
    render();
  };

  const breakDecriment = () => {
    if (breakLength - ONE_MINUTE <= 0) return;
    breakLength -= ONE_MINUTE;
    if (!isSession) timeLeft -= ONE_MINUTE;
    render();
  };

  const sessionDecriment = () => {
    if (sessionLength - ONE_MINUTE <= 0) return;
    sessionLength -= ONE_MINUTE;
    if (isSession) timeLeft -= ONE_MINUTE;
    render();
  };

  const timeLeftDecirment = () => {
    timeLeft -= ONE_SECOND;
    if (timeLeft < 0) {
      if (isSession) {
        startBreak();
      } else {
        startSession();
      }
    } else if (timeLeft === 0) {
      startAudio();
    }
    render();
  };

  const startBreak = () => {
    $timerLabel.innerText = "Break:";
    timeLeft = breakLength;
    isSession = false;
  };

  const startSession = () => {
    $timerLabel.innerText = "Session:";
    timeLeft = sessionLength;
    isSession = true;
  };

  const startAudio = () => {
    stopAudio();
    $beep.play();
  };

  const stopAudio = () => {
    $beep.pause();
    $beep.currentTime = 0;
  };

  const toggle = async () => {
    if (timer) {
      toggleOff();
    } else {
      toggleOn();
    }
  };

  const toggleOn = () => {
    $start_stop.innerText = "Pause";
    if (timer === null) {
      timer = setInterval(timeLeftDecirment, 1000);
    }
  };

  const toggleOff = () => {
    $start_stop.innerText = "Start";
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  const displaySeconds = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${formatTime(minutes)}:${formatTime(seconds)}`;
  };

  const formatTime = (time) => {
    const str = String(time).slice(0, 3);
    if (str.length === 2) {
      return str;
    }
    return `0${str}`;
  };

  const displayMinutes = (time) => String(time / 60);

  const render = () => {
    $timeLeft.innerHTML = displaySeconds(timeLeft);
    $breakLength.innerHTML = displayMinutes(breakLength);
    $sessionLength.innerHTML = displayMinutes(sessionLength);
    // console.log(`t:${timeLeft}, b:${breakLength}, s:${sessionLength}`);
  };

  $start_stop.addEventListener("click", toggle);
  $reset.addEventListener("click", reset);
  $breakIncrement.addEventListener("click", breakIncrement);
  $breakDecrement.addEventListener("click", breakDecriment);
  $sessionIncrement.addEventListener("click", sessionIncrement);
  $sessionDecrement.addEventListener("click", sessionDecriment);

  setup();
  render();
})();