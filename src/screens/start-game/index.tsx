import React, { useState } from "react";
import { Button, View } from "react-native";
import { CustomInput } from "../../components/index";
import { styles } from "./styles";
import colors from "../../constants/colors";
import Card from "../../components/card";

export default function StartGame() {
  const [enteredValue, setEnteredValue] = useState<string>(null);

  const regex = /^[1-9]?\d$/;
  const onChangeValue = (value: string) => {
    regex.test(value) ? setEnteredValue(value) : setEnteredValue("");
  };

  return (
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
            onPress={() => null}
          />
          <Button title="Limpiar" color={colors.primary} onPress={() => null} />
        </View>
      </Card>
    </View>
  );
}
