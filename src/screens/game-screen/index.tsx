import React, { FC, useState } from "react";
import { Button, View, Text } from "react-native";
import { styles } from "./styles";
import colors from "../../constants/colors";
import Card from "../../components/card";
import NumberContainer from "../../components/number-container";
import { generateRandomNumber } from "../../utils/generateRandomNumber";

type Props = {
  userNumber: number;
};

const GameScreen: FC<Props> = ({ userNumber }) => {
  const [currentNumber, setCurrentNumber] = useState<number>(
    generateRandomNumber(0, 100, userNumber)
  );

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text>La suposicion del oponente</Text>
        <NumberContainer number={currentNumber} />
        <View style={styles.buttonContainer}>
          <Button title="Menor" color={colors.primary} onPress={() => null} />
          <Button title="Mayor" color={colors.primary} onPress={() => null} />
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
