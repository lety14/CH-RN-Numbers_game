import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  modalContentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
  },
  modalMessage: {
    fontSize: 14,
  },
  number: {
    fontSize: 25,
    paddingVertical: 25,
    color: colors.black,
    fontWeight: "bold",
  },
  modalButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
  },
});
