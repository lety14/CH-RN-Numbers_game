import React, { FC, useState } from "react";
import {
  Button,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Image,
} from "react-native";
import { CustomInput } from "../../components/index";
import { styles } from "./styles";
import colors from "../../constants/colors";
import Card from "../../components/card";

type Props = {
  handleConfirm: () => void;
  onSelectNumber: (number: number) => void;
};

const StartGame: FC<Props> = ({ handleConfirm, onSelectNumber }) => {
  const [enteredValue, setEnteredValue] = useState<string>(null);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const regex = /^[1-9]?\d$/;
  const onChangeValue = (value: string) => {
    regex.test(value) ? setEnteredValue(value) : setEnteredValue("");
  };

  const onResetInput = () => {
    setEnteredValue("");
    setIsConfirmed(false);
  };

  const onHandleConfirm = () => {
    const number = parseInt(enteredValue, 10);
    if (isNaN(number) || number <= 0 || number >= 99) return;
    onSelectNumber(number);
    setIsConfirmed(true);
    setEnteredValue("");
    handleConfirm();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <CustomInput
            value={enteredValue}
            onChangeValue={onChangeValue}
            label="Elija un número"
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Confirmar"
              color={colors.primary}
              onPress={onHandleConfirm}
            />
            <Button
              title="Limpiar"
              color={colors.primary}
              onPress={onResetInput}
            />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
