import { StyleSheet, View } from "react-native";

import NumberContainer from "../../../components/game/NumberContainer";
import InstructionText from "../../../components/UI/InstructionText";
import PrimaryButton from "../../../components/UI/Buttons/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import Card from "../../../components/UI/Card/Card";

const PortraitGameScreen = ({ currentGuess, nextGuessHandler }) => {
  return (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      {/* Guess */}
      <Card>
        <View>
          <InstructionText style={{ marginBottom: 20 }}>Higher or Lower</InstructionText>
          <View style={styles.btnContainer}>
            <View style={styles.btn}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                <Ionicons
                  size={24}
                  color="#fff"
                  name="md-remove"
                />
              </PrimaryButton>
            </View>
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
        </View>
      </Card>
    </>
  );
};

export default PortraitGameScreen;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flex: 1,
  },
});
