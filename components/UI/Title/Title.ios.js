import { StyleSheet, Text, Platform } from "react-native";

const Title = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    padding: 12,
    marginHorizontal: "auto",
    maxWidth: "80%",
    width: 300,
  },
});
