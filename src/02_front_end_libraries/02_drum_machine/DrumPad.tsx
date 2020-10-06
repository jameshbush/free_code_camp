import React from "react";

interface IDrumPad {
  keyId: string;
  soundId: string;
  src: string;
}

interface IDrumPadProps {
  drumPad: IDrumPad;
  playSound: (drumPad: IDrumPad) => void;
}

const DrumPad = ({
  drumPad: { keyId, soundId, src },
  playSound,
}: IDrumPadProps) => (
  <li
    id={soundId}
    onClick={() => playSound({ keyId, soundId, src })}
    className="drum-pad list-group-item"
    key={soundId}
  >
    {keyId}
    <audio src={src} id={keyId} className="clip" />
  </li>
);

const drumPads: IDrumPad[] = [
  {
    keyId: "Q",
    soundId: "hi-hat-cerrado",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Hi-Hat_Cerrado.ogg",
  },
  {
    keyId: "W",
    soundId: "hi-hat-abierto",
    src:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Hi-Hat_Abierto.ogg",
  },
  {
    keyId: "E",
    soundId: "crash",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/68/Crash.ogg",
  },
  {
    keyId: "A",
    soundId: "tom-medio",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Tom_Medio.ogg",
  },
  {
    keyId: "S",
    soundId: "tom-agudo",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tom_Agudo.ogg",
  },
  {
    keyId: "D",
    soundId: "tom-grave",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Tom_Grave.ogg",
  },
  {
    keyId: "Z",
    soundId: "redoblante",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/75/Redoblante.ogg",
  },
  {
    keyId: "X",
    soundId: "cowbell",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Cowbell.ogg",
  },
  {
    keyId: "C",
    soundId: "cbtrig",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c7/808cbtrig_01.ogg",
  },
];

export { DrumPad, drumPads };
export type { IDrumPad };
