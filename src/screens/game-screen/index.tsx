import React, { FC, useEffect, useRef, useState } from "react";
import { Button, View, Text, Alert } from "react-native";
import { styles } from "./styles";
import colors from "../../constants/colors";
import Card from "../../components/card";
import NumberContainer from "../../components/number-container";
import { generateRandomNumber } from "../../utils/generateRandomNumber";

type Props = {
  userNumber: number;
  onGameOver: (number: number) => void;
};

const GameScreen: FC<Props> = ({ userNumber, onGameOver }) => {
  const minNumber = useRef(1);
  const maxNumber = useRef(100);
  const [currentGuess, setCurrentGuess] = useState<number>(
    generateRandomNumber(minNumber.current, maxNumber.current, userNumber)
  );
  const [rounds, setRounds] = useState<number>(0);

  const onHandleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Error", "La direccion elegida es incorrecta", [
        { text: "Aceptar", style: "destructive" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxNumber.current = currentGuess;
    } else {
      minNumber.current = currentGuess;
    }
    const nextNumber = generateRandomNumber(
      minNumber.current,
      maxNumber.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((current) => current + 1);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(rounds);
    }
  }, [currentGuess, userNumber, onGameOver]);

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={styles.text}>La suposicion del oponente</Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.buttonContainer}>
          <Button
            title="Menor"
            color={colors.primary}
            onPress={() => onHandleNextGuess("lower")}
          />
          <Button
            title="Mayor"
            color={colors.primary}
            onPress={() => onHandleNextGuess("greater")}
          />
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
