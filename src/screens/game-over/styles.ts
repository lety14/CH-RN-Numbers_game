import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imagesContainer: {
    height: 210,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: width * 0.4,
    height: height * 0.15,
  },
  card: {
    marginTop: 50,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontFamily: "IBMPlexMonoRegular",
    fontSize: 16,
    paddingVertical: 5,
  },
});
