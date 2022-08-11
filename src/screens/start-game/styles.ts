import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 80,
  },
  buttonContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "none",
    color: colors.black,
  },
  card: {
    justifyContent: "center",
    marginHorizontal: 30,
    paddingVertical: 30,
    marginBottom: 20,
    borderRadius: 20,
  },
});
