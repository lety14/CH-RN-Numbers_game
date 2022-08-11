import React, { FC } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  number: number;
};

const NumberContainer: FC<Props> = ({ number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

export default NumberContainer;
