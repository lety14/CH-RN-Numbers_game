import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    paddingHorizontal: 50,
  },

  input: {
    width: "65%",
    fontSize: 25,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    textAlign: "center",
  },
  inputOnFocus: {
    borderBottomColor: colors.black,
  },
  inputLabel: {
    fontSize: 15,
    color: colors.text,
    paddingVertical: 5,
  },
});
