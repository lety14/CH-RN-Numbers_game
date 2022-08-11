import React, { useState, useEffect, FC } from "react";
import { View, Text, Button, Image, Dimensions } from "react-native";

import { Card } from "../../components";
import colors from "../../constants/colors";
import { styles } from "./styles";

type Props = {
  userNumber: number;
  rounds: number;
  onRestart: () => void;
};

const GameOver: FC<Props> = ({ onRestart, rounds, userNumber }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <Image
          source={require("../../../assets/gameover.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Image
          source={require("../../../assets/unicorn.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Card style={styles.card}>
        <Text style={styles.title}>Intentos: {rounds}</Text>
        <Text style={styles.title}>El numero era: {userNumber}</Text>
      </Card>
      <Button title="Nuevo juego" onPress={onRestart} color={colors.primary} />
    </View>
  );
};

export default GameOver;
