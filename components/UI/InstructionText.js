import { StyleSheet, Text } from "react-native";
import { COLORS } from "./../../constants/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: COLORS.accent300,
    fontSize: 24,
  },
});
