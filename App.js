import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";

import StartGame from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import { COLORS } from "./constants/colors";
import GameOver from "./screens/GameOver";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setRounds] = useState(0);
  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const pickedNumberHandler = function (pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  if (!fontLoaded) return <AppLoading />;

  let screen = <StartGame onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        onGameOver={gameOverHandler}
        userSelectedNumber={userNumber}
      />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOver userNumber={userNumber} onStartNewGame={startNewGameHandler}  />;
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function startNewGameHandler () {
    setRounds(0);
    setUserNumber(null);
    
  }

  return (
    <>
      <StatusBar style="light" />

      <LinearGradient
        colors={[COLORS.primary700, COLORS.accent300]}
        style={styles.rootContainer}>
        <ImageBackground
          style={styles.rootContainer}
          imageStyle={{ opacity: 0.15 }}
          source={require("./assets/images/background.png")}
          resizeMode="cover">
          <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
