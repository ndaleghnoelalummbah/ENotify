import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  status: {
    backgroundColor: "#ff0000",
  },

  intro: {
    backgroundColor: "#fff",
    padding: 22,
    display: "flex",
    flexDirection: "row",
    marginVertical: 12,
    borderBottomEndRadius: 12,
  },
  info: {
    marginLeft: 22,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 24,
    fontWeight: "600",
  },
  name: {
    color: "#0065FF",
    fontSize: 20,
    fontWeight: "400",
  },
  email: {
    color: "#186ef0",
    fontSize: 14,
  },
  addContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 140,
    marginVertical: 24,
    elevation: 4,
    shadowColor: "#000",
    width: 160,
  },
  actionContainer: {
    display: "flex",
    alignItems: "center",
    //  backgroundColor: "red",
    height: "58%",
  },
  icons: {
    color: "#0065FF",
    fontSize: 54,
 
  },
  text: {
    color: "#0065FF",
       fontSize: 14,
       fontWeight:"500",
       marginTop:2,
  },
});
export default styles;