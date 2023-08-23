import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#0065FF",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 28,
    paddingVertical: 12,
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  icons: {
    color: "#fff",
    fontSize: 28,
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 12,
  },
});
export default styles;