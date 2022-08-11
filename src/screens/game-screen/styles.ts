import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  card: {
    marginTop: 20,
    alignItems: "center",
    width: "80%",
    marginHorizontal: 30,
    paddingVertical: 30,
    marginBottom: 20,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 200,
    maxWidth: "80%",
  },
});
