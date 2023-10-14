import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.btnOuterCont}>
      {/* IOS button feedback */}
      <Pressable
      onPress={onPress}
        style={({ pressed }) =>
          pressed ? [styles.btnInnerCont, styles.pressed] : styles.btnInnerCont
        }
        android_ripple={{ color: COLORS.primary600 }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnOuterCont: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    backgroundColor: COLORS.primary500,
  },

  btnInnerCont: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  //for IOS
  pressed: {
    opacity: 0.75,
  },
});
