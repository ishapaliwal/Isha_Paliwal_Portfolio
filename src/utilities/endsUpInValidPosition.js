import { calculateFinalPosition } from "./calculateFinalPosition";
import { minTileIndex, maxTileIndex } from "../game_constants";
import useMapStore from "../stores/map";

export function endsUpInValidPosition(currentPosition, moves) {
  const finalPosition = calculateFinalPosition(
    currentPosition,
    moves
  );

  if (
    finalPosition.rowIndex === -1 ||
    finalPosition.tileIndex === minTileIndex - 1 ||
    finalPosition.tileIndex === maxTileIndex + 1
  ) {
    return false;
  }

  const finalRow = useMapStore.getState().rows[finalPosition.rowIndex - 1];
  if (
    finalRow &&
    finalRow.type === "forest" &&
    finalRow.trees.some(
      (tree) => tree.tileIndex === finalPosition.tileIndex
    )
  ) {
    return false;
  }

  return true;
}