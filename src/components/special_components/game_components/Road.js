import React from "react";
import { tilesPerRow, tileSize } from "../../../game_constants";

export function Road({ rowIndex, children }) {
  return (
    <group position-y={rowIndex * tileSize}>
      <mesh receiveShadow>
        <planeGeometry args={[tilesPerRow * tileSize, tileSize]} />
        <meshLambertMaterial color={0x454a59} flatShading />
      </mesh>
      {children}
    </group>
  );
}