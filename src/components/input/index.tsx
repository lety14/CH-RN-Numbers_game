import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { FC, useState } from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "./styles";

interface CustomInputProps {
  value: string;
  onChangeValue: (value: string) => void;
  label?: string;
  placeholder?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

const CustomInput: FC<CustomInputProps> = ({
  value,
  onChangeValue,
  placeholder,
  label,
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      <TextInput
        style={focus ? [styles.input, styles.inputOnFocus] : styles.input}
        placeholderTextColor="#cccccc"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeValue}
        //
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        blurOnSubmit
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="numeric"
        maxLength={2}
      />
    </View>
  );
};

export default CustomInput;
