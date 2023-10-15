import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/UI/Title/Title";
import { COLORS } from "./../constants/colors";
import PrimaryButton from "./../components/UI/Buttons/PrimaryButton";

const GameOver = ({ roundNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 300) imageSize = 150;
  if (height < 400) imageSize = 80;

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootCont}>
        <Title>Game Over</Title>
        <View style={[styles.imageCont, imageStyle]}>
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
    </ScrollView>
  );
};

export default GameOver;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootCont: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageCont: {
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
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
