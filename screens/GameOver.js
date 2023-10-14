import { Image, StyleSheet, View, Text } from "react-native";
import Title from "../components/UI/Title/Title";
import { COLORS } from "./../constants/colors";
import PrimaryButton from "./../components/UI/Buttons/PrimaryButton";

const GameOver = ({ roundNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootCont}>
      <Title>Game Over</Title>
      <View style={styles.imageCont}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summary}>
        Your Phone needed <Text style={styles.highlight}>{roundNumber}</Text> rounds to guess the{" "}
        <Text style={styles.highlight}>{userNumber}</Text> number.
      </Text>

      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  rootCont: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageCont: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: COLORS.primary700,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summary: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 30,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: COLORS.primary500,
  },
});
