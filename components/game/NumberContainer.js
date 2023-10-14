import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "./../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.accent300,
    padding: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
  },
  numberText: {
    color: COLORS.accent300,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
