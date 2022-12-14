import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: height > 800 ? 80 : 30,
  },
  buttonContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  card: {
    justifyContent: "center",
    marginHorizontal: 30,
    paddingVertical: 30,
    marginBottom: 20,
    borderRadius: 20,
    minHeight: 200,
  },
});
