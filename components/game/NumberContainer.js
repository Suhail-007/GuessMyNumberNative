import { StyleSheet, Text, View, Dimensions } from "react-native";
import { COLORS } from "./../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.accent300,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: deviceWidth < 380 ? 24 : "auto",
  },
  numberText: {
    color: COLORS.accent300,
    fontSize: 36,
    fontFamily: "open-sans-bold",
  },
});
