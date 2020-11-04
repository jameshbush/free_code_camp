import React from "react";
import { cleanUpTestRunner, initializeTestRunner } from "../../utils/scripts/injectFCCTests";
import "./styles.scss";

type ClockType = "session" | "break";

interface IPomodoroClockState {
  sessionLength: number;
  breakLength: number;
  current: number;
  active: ClockType;

  timer: null | NodeJS.Timeout;
  clockSpeed: number;
}

const INITIAL_CLOCK = {
  sessionLength: 25 * 60,
  breakLength: 5 * 60,
  current: 0,
  active: "session" as ClockType,

  timer: null,
  clockSpeed: 1000,
};

class PomodoroClock extends React.Component<null, IPomodoroClockState> {
  constructor(props: null) {
    super(props);
    this.state = INITIAL_CLOCK;
  }
  componentDidMount = () => initializeTestRunner();
  componentWillUnmount = () => cleanUpTestRunner();

  // display
  roundMinutesDown = (seconds: number) => Math.floor(seconds / 60);
  remainderSeconds = (seconds: number) => seconds % 60;
  displayTime = () => {
    const seconds = this.calculateSecondsRemaining();
    const mins = this.roundMinutesDown(seconds);
    const secs = this.remainderSeconds(seconds);
    return [mins, secs].map((num) => (num < 10 ? `0${num}` : `${num}`)).join(":");
  };
  calculateSecondsRemaining = () => this.state[this.getActiveLengthKey()] - this.state.current;
  displayActive = () => `${this.state.active[0].toUpperCase()}${this.state.active.slice(1)}`;
  getActiveLengthKey = () => `${this.state.active}Length` as "sessionLength" | "sessionLength";

  // buttons
  reset = () => {
    this.pauseTimer();
    this.getRewoundBell();
    this.setState(INITIAL_CLOCK);
  };
  incrementBreakLength = () => this.updateLength("breakLength", 1);
  decrementBreakLength = () => this.updateLength("breakLength", -1);
  incrementSessionLength = () => this.updateLength("sessionLength", 1);
  decrementSessionLength = () => this.updateLength("sessionLength", -1);
  updateLength = (key: "breakLength" | "sessionLength", amount: 1 | -1) => {
    const length = this.state[key] + amount * 60;
    if (length <= 0) return;
    if (length > 60 * 60) return;
    this.setState(() => ({ [key as "sessionLength"]: length }));
  };
  setTurboClockSpeed = () => this.updateClockSpeed(1);
  setNormalClockSpeed = () => this.updateClockSpeed(1000);
  updateClockSpeed = (clockSpeed: number) => {
    this.setState({ clockSpeed });
    this.pauseTimer();
  };

  // timer
  startTimer = () => {
    if (this.state.timer !== null) return;
    const timer = setInterval(this.advanceTimer, this.state.clockSpeed);
    this.setState({ timer });
  };
  advanceTimer = () => {
    if (this.calculateSecondsRemaining() <= 0) {
      this.getRewoundBell().play();
      const active = this.state.active === "session" ? "break" : "session";
      this.setState({ active, current: 0 });
      return;
    }
    this.setState({ current: this.state.current + 1 });
  };
  pauseTimer = () => {
    if (this.state.timer === null) return;
    clearInterval(this.state.timer);
    this.setState({ timer: null });
  };
  toggleTimer = () => {
    if (this.state.timer === null) {
      this.startTimer();
    } else {
      this.pauseTimer();
    }
  };
  getRewoundBell = () => {
    const $bell = document.getElementsByTagName("audio")[0];
    $bell.pause();
    $bell.currentTime = 0;
    return $bell;
  };

  render() {
    const { roundMinutesDown, displayTime, displayActive, reset, toggleTimer } = this;
    const {
      decrementSessionLength,
      incrementSessionLength,
      decrementBreakLength,
      incrementBreakLength,
    } = this;
    const { timer, sessionLength, breakLength } = this.state;

    return (
      <div className="container">
        <div id="tomato-clock">
          <h1>Pomodoro Clock</h1>
          <div className="grid">
            <h4 id="timer-label">Current {displayActive()}</h4>
            <ControlButton id="reset" text="Reset" onClick={reset} />
            <h5 id="time-left">{displayTime()}</h5>
            <ControlButton id="start_stop" text={timer ? "Pause" : "Start"} onClick={toggleTimer} />

            <h4 id="session-label">Session Length</h4>
            <ControlButton id="session-decrement" text="-" onClick={decrementSessionLength} />
            <h5 id="session-length">{roundMinutesDown(sessionLength)}</h5>
            <ControlButton id="session-increment" text="+" onClick={incrementSessionLength} />

            <h4 id="break-label">Break Length</h4>
            <ControlButton id="break-decrement" text="-" onClick={decrementBreakLength} />
            <h5 id="break-length">{roundMinutesDown(breakLength)}</h5>
            <ControlButton id="break-increment" text="+" onClick={incrementBreakLength} />

            <h4 id="break-label">Clock Speed</h4>
            <ControlButton id="normal-speed" text="Normal" onClick={this.setNormalClockSpeed} />
            <h4>{this.state.clockSpeed === 1000 ? "Normal" : "Turbo"}</h4>
            <ControlButton id="turbo-speed" text="Turbo" onClick={this.setTurboClockSpeed} />
          </div>

          <audio
            id="beep"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Doorbell-classic-dingdong.ogg"
          ></audio>
        </div>
      </div>
    );
  }
}

function ControlButton(params: { text: string; id: string; onClick?: (event: React.MouseEvent) => void }) {
  return (
    <button type="button" className="btn btn-secondary" id={params.id} onClick={params.onClick}>
      {params.text}
    </button>
  );
}

export { PomodoroClock };
