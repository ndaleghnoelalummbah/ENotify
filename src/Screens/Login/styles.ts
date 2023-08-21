import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",

    paddingHorizontal: 24,
    height: "100%",
    backgroundColor: "#FFF",
  },
  loginImage: {
    width: 360,
    height: 300,
    
  },
  inputContainer: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    marginVertical: 18,
    justifyContent: "space-between",
  },
  input: {
    paddingHorizontal: 4,
    paddingBottom: 3,
    width: "86%",
    borderBottomWidth: 2,
    borderBottomColor: "#BDB9B9",
    fontSize: 24,
    color: "#0065FF",
  },
  passwd: {
    display: "flex",
    flexDirection: "row",
    width: "86%",
    borderBottomWidth: 2,
    borderBottomColor: "#BDB9B9",
  },
  PasswdText: {
    paddingHorizontal: 4,
    paddingBottom: 3,
    fontSize: 24,
    width: "88%",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#0065FF",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  heading: {
    color: "#000",
    fontSize: 28,
    marginBottom: 8,
    marginTop:38,
    fontWeight: "700",
  },
  mail: {
    width: 36,
    height: 36,
  },
  lock: {
    width: 40,
    height: 40,
  },
  eyeIcon: {
    width: 26,
    height: 20,

    marginTop: 8,
  },
});
export default styles;
