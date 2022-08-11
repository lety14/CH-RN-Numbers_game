import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    paddingBottom: 10,
  },
  card: {
    marginTop: 20,
    alignItems: "center",
    width: "80%",
    marginHorizontal: 30,
    paddingVertical: 30,
    marginBottom: 20,
    borderRadius: 20,
    minHeight: 200,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 200,
    maxWidth: width * 0.8,
  },
});
