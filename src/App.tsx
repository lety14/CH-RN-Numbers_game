import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./App.styles";
import StartGame from "./screens/start-game";
import { Header } from "./components/index";
import GameScreen from "./screens/game-screen";
import { ModalStartGame } from "./containers/modalStartGame";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>(null);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const onSelectNumber = (number: number) => {
    setUserNumber(number);
  };

  const onStartGame = (startGame: boolean) => {
    setStartGame(startGame);
  };

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
      ) : (
        <GameScreen userNumber={userNumber} />
      )}
    </SafeAreaView>
  );
}
