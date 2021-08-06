import React, { ReactElement } from "react";
import style from "./single-player-game.styles";
import { Board, GradientBackground } from "@components";
import { SafeAreaView } from "react-native-safe-area-context";
import { BoardState, printFormattedBoard } from "@utils";

export default function Game(): ReactElement {
  const b: BoardState = ["x", "o", null, "x", "o", null, "x", "o", "x"];
  printFormattedBoard(b);
  return (
    <GradientBackground>
      <SafeAreaView style={style.container}>
        <Board
          onCellPressed={index => {
            alert(index);
          }}
          state={b}
          size={300}
        />
      </SafeAreaView>
    </GradientBackground>
  );
}
