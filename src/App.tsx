import { useFonts } from "expo-font";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./App.styles";
import StartGame from "./screens/start-game";
import { Header } from "./components/index";
import GameScreen from "./screens/game-screen";
import { ModalStartGame } from "./containers/modalStartGame";
import GameOver from "./screens/game-over";

export default function App() {
  const [loaded] = useFonts({
    IBMPlexMonoRegular: require("../assets/fonts/IBMPlexMono-Regular.ttf"),
  });
  const [userNumber, setUserNumber] = useState<number>(null);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const onSelectNumber = (number: number) => {
    setUserNumber(number);
  };

  const onStartGame = (startGame: boolean) => {
    setStartGame(startGame);
    setIsOpenModal(false);
  };

  const onGameOver = (rounds: number) => {
    setGuessRounds(rounds);
  };

  const onRestartGame = () => {
    setStartGame(false);
    setUserNumber(null);
    setGuessRounds(0);
  };

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Adivina el numero" />
      {startGame === false ? (
        <>
          <StartGame
            handleConfirm={() => setIsOpenModal(true)}
            onSelectNumber={onSelectNumber}
          />
          {
            <ModalStartGame
              modalVisible={isOpenModal}
              setModalVisible={() => setIsOpenModal(false)}
              number={userNumber}
              onStartGame={() => onStartGame(true)}
            />
          }
        </>
      ) : guessRounds <= 0 && startGame ? (
        <GameScreen userNumber={userNumber} onGameOver={onGameOver} />
      ) : (
        <GameOver
          userNumber={userNumber}
          rounds={guessRounds}
          onRestart={onRestartGame}
        />
      )}
    </SafeAreaView>
  );
}
