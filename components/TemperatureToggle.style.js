import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
  },
  temperature: {
    fontSize: 70,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    paddingHorizontal: 50,
    marginVertical: 30,
    flexDirection: "row",
  },
  input: {
    color: "white",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  degreeType: {
    color: "white",
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonContainer: {
    paddingHorizontal: 100,
    marginTop: 20,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});
