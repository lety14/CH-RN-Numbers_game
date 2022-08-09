import React, { FC, ReactNode } from "react";
import { StyleProp, View } from "react-native";

import { styles } from "./styles";

type CardProps = {
  children: ReactNode;
  style?: StyleProp<any>;
};

const Card: FC<CardProps> = ({ children, style }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default Card;
