import { useState, useEffect, useMemo } from "react";
import { StyleSheet, View, Alert, FlatList, ScrollView, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/UI/Title/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/Buttons/PrimaryButton";
import Card from "../components/UI/Card/Card";
import InstructionText from "../components/UI/InstructionText";
import GuessLog from "./../components/game/GuessLog";

function generateRandomNumber(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

/**
 * Renders the game screen component.
 *
 * @param {number} userSelectedNumber - The number selected by the user.
 * @param {function} gameOverHandler - The function to handle the game over event.
 * @return {JSX.Element} - The rendered game screen component.
 */
const GameScreen = ({ userSelectedNumber, onGameOver }) => {
  const initialGuess = useMemo(
    () => generateRandomNumber(minBoundary, maxBoundary, userSelectedNumber),
    []
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guess, setGuess] = useState([initialGuess]);

  useEffect(() => {
    if (userSelectedNumber === currentGuess) {
      onGameOver();
    }
  }, [currentGuess, userSelectedNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  //direction => 'lower', 'greater'
  const nextGuessHandler = function (direction) {
    if (
      (direction === "lower" && currentGuess < userSelectedNumber) ||
      (direction === "greater" && currentGuess > userSelectedNumber)
    )
      return Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
    if (direction === "lower") {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomNumber(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuess(prevG => [newRndNumber, ...prevG]);
  };

  const guessRoundsListLength = guess.length;

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Opponent's Guess</Title>
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

      <FlatList
        style={styles.list}
        data={guess}
        renderItem={itemData => (
          <GuessLog
            roundNumber={guessRoundsListLength - itemData.index}
            guess={itemData.item}
          />
        )}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 24,
    gap: 10,
  },

  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 24,
  },
});
