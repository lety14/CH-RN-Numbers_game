import React from "react";
import { SafeAreaView } from "react-native";
import { styles } from "./App.styles";
import StartGame from "./screens/start-game";
import { Header } from "./components/index";

export default function App() {
  let content = <StartGame />;

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Adivina el numero" />
      {content}
    </SafeAreaView>
  );
}
