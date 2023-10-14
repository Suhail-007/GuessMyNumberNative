import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";

import Title from "../components/UI/Title/Title";
import InstructionText from "./../components/UI/InstructionText";
import Card from "../components/UI/Card/Card";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";

import { COLORS } from "../constants/colors";

const StartGame = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = function (value) {
    setEnteredNumber(value);
  };

  const resetInputHandler = function () {
    setEnteredNumber("");
    onPickNumber(null);
  };

  const confirmInputHandler = function () {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be a number between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number...</InstructionText>
        <TextInput
          keyboardType="number-pad"
          maxLength={2}
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />

        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.btn}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  input: {
    height: 50,
    fontSize: 32,
    borderBottomColor: COLORS.accent300,
    borderBottomWidth: 2,
    color: COLORS.accent300,
    marginVertical: 8,
    fontWeight: "bold",
    width: 40,
    textAlign: "center",
  },

  btnContainer: {
    flexDirection: "row",
  },
  btn: {
    flex: 1,
  },
});
