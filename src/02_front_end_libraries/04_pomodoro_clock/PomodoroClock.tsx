import React from "react";
import { initializeTestRunner } from "../../utils/scripts/injectFCCTests";
import "./styles.scss";

type ClockType = "session" | "break";

interface IPomodoroClockState {
  sessionLength: number;
  breakLength: number;
  current: number;
  active: ClockType;
  timer: null | NodeJS.Timeout;
  timeout: number;
}

const INITIAL_CLOCK = {
  sessionLength: 25 * 60,
  breakLength: 5 * 60,
  current: 0,

  timer: null,
  active: "session" as ClockType,
  timeout: 1000,
};

class PomodoroClock extends React.Component<null, IPomodoroClockState> {
  constructor(props: null) {
    super(props);
    this.state = INITIAL_CLOCK;
  }
  componentDidMount = () => initializeTestRunner("25-5-clock", "skip");

  // display

  roundMinutesDown = (seconds: number) => Math.floor(seconds / 60);
  remainderSeconds = (seconds: number) => seconds % 60;
  displayTime = () => {
    const seconds = this.state[this.activeTotal()] - this.state.current;
    const mins = this.roundMinutesDown(seconds);
    const secs = this.remainderSeconds(seconds);
    return `${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
  };
  displayActive = () => `${this.state.active[0].toUpperCase()}${this.state.active.slice(1)}`;
  activeTotal = () => `${this.state.active}Length` as "sessionLength" | "sessionLength";

  // buttons
  handleReset = () => {
    this.pauseTimer();
    this.getRewoundBell();
    this.setState(INITIAL_CLOCK);
  };
  incrementBreak = () => this.updateTimeTotal("breakLength", 1);
  decrementBreak = () => this.updateTimeTotal("breakLength", -1);
  incrementSession = () => this.updateTimeTotal("sessionLength", 1);
  decrementSession = () => this.updateTimeTotal("sessionLength", -1);
  updateTimeTotal = (key: "breakLength" | "sessionLength", amount: 1 | -1) => {
    const total = this.state[key] + amount * 60;
    if (total <= 0) return;
    if (total > 60 * 60) return;
    this.setState(() => ({ [key as "sessionLength"]: total }));
  };
  startTimer = () => {
    if (this.state.timer !== null) return;
    const timer = setInterval(() => {
      if (this.displayTime() === "00:00") {
        this.getRewoundBell().play();
        const active = this.state.active === "session" ? "break" : "session";
        this.setState({ active, current: 0 });
        return;
      }
      this.setState({ current: this.state.current + 1 });
    }, this.state.timeout);
    this.setState({ timer });
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
    const { roundMinutesDown, state, displayTime } = this;

    return (
      <div className="container">
        <div id="tomato-clock">
          <h1>Pomodoro Clock</h1>
          <div className="grid">
            <h4 id="timer-label">Current {this.displayActive()}</h4>
            <ControlButton id="reset" text="Reset" onClick={this.handleReset} />
            <h5 id="time-left">{displayTime()}</h5>
            <ControlButton id="start_stop" text={state.timer ? "Pause" : "Start"} onClick={this.toggleTimer} />

            <h4 id="session-label">Session Length</h4>
            <ControlButton id="session-decrement" text="-" onClick={this.decrementSession} />
            <h5 id="session-length">{roundMinutesDown(state.sessionLength)}</h5>
            <ControlButton id="session-increment" text="+" onClick={this.incrementSession} />

            <h4 id="break-label">Break Length</h4>
            <ControlButton id="break-decrement" text="-" onClick={this.decrementBreak} />
            <h5 id="break-length">{roundMinutesDown(state.breakLength)}</h5>
            <ControlButton id="break-increment" text="+" onClick={this.incrementBreak} />
          </div>

          <audio
            id="beep"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Villeneuve-le-Comte_-_Cloche_de_l%27%C3%A9glise_Notre-Dame-de-la-Nativit%C3%A9.ogg"
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
