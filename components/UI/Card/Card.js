import { StyleSheet, View, Dimensions } from "react-native";
import { COLORS } from "./../../../constants/colors";

const Card = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    backgroundColor: COLORS.primary700,
    borderRadius: 8,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});
