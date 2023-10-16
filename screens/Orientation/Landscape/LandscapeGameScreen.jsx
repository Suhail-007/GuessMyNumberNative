import { StyleSheet, View } from "react-native";

import InstructionText from "../../../components/UI/InstructionText";
import PrimaryButton from "../../../components/UI/Buttons/PrimaryButton";
import NumberContainer from "../../../components/game/NumberContainer";
import { Ionicons } from "@expo/vector-icons";

const LandscapeGameScreen = ({ nextGuessHandler, currentGuess }) => {
  return (
    <>
      <InstructionText style={{ marginBottom: 20, alignSelf: 'center' }}>Higher or Lower</InstructionText>
      <View style={styles.btnContainerLandscape}>
        <View style={styles.btn}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons
              size={24}
              color="#fff"
              name="md-remove"
            />
          </PrimaryButton>
        </View>
        <NumberContainer>{currentGuess}</NumberContainer>

        <View style={styles.btn}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons
              size={24}
              color="#fff"
              name="md-add"
            />
          </PrimaryButton>
        </View>
      </View>
    </>
  );
};

export default LandscapeGameScreen;

const styles = StyleSheet.create({
  btnContainerLandscape: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 30,
  },
  btn: {
    flex: 1,
  },
});
