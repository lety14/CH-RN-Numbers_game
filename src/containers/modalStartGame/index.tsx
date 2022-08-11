import React, { FC } from "react";
import { Button, Text, View } from "react-native";
import colors from "../../constants/colors";
import CustomModal from "../../components/modal";
import { styles } from "./styles";

type Props = {
  number: number;
  modalVisible: boolean;
  setModalVisible: () => void;
  onStartGame: (b: boolean) => void;
};

export const ModalStartGame: FC<Props> = ({
  number,
  modalVisible,
  setModalVisible,
  onStartGame,
}) => {
  return (
    <CustomModal animationType="fade" modalVisible={modalVisible}>
      <View style={styles.modal}>
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalTitle}>Detalle de la lista</Text>
        </View>
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalMessage}>
            ¿Estás seguro que deseas eliminar?
          </Text>
        </View>
        <View style={styles.modalContentContainer}>
          <Text style={styles.modalItem}>{number}</Text>
        </View>
        <View style={styles.modalButton}>
          <Button
            title="Jugar"
            onPress={() => onStartGame(true)}
            color={colors.deleteButton}
          />
          <Button
            title="Cancelar"
            onPress={() => setModalVisible()}
            color={colors.cancelButton}
          />
        </View>
      </View>
    </CustomModal>
  );
};
