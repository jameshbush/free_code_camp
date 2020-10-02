import React from "react";
import { initializeTestRunner } from "../../utils/scripts/injectFCCTests";
import { drumPads, DrumPad, IDrumPad } from "./DrumPad";
import "./styles.scss";

interface IDrumMachineState {
  currentSoundId: string | null;
}

class DrumMachine extends React.Component<undefined, IDrumMachineState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentSoundId: null,
    };
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    initializeTestRunner("drum-machine");
    document.addEventListener("keydown", ({ key }) => {
      const drumPad = drumPads.find(({ keyId }) => keyId === key.toUpperCase());
      if (!drumPad) {
        return;
      }
      this.playSound(drumPad);
    });
  }

  playSound({ soundId, keyId }: IDrumPad) {
    const el = document?.getElementById?.(keyId);
    if (!el) {
      throw Error("no audio found");
    }

    // missing type for play attribute
    (el as any).pause();
    (el as any).currentTime = 0;
    (el as any).play();
    this.setState({ currentSoundId: soundId });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">Drum Machine</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div id="drum-machine">
                <div id="display">
                  {this.state.currentSoundId ?? "Click or press a key"}
                </div>
                <ul className="list-group">
                  {drumPads.map((drumPad) => {
                    return DrumPad({ drumPad, playSound: this.playSound });
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { DrumMachine };
