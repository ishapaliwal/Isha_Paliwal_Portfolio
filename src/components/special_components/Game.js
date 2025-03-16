import React from "react";
import { Scene } from "./game_components/Scene";
import { Player } from "./game_components/Player";
import { Controls } from "./game_components/Controls";
import "../../styles/Game.css";
import { Map } from "./game_components/Map";
import { Score } from "./game_components/Score";
import { Result } from "./game_components/Result";

export default function Game() {
  return (
    <div className="game">
      <Scene>
        <Player />
        <Map />
      </Scene>
      <Score />
      <Controls />
      <Result />
    </div>
  );
}