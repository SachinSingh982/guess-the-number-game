import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { colors } from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [takenRounds, setTakenRounds] = useState(0);

  const [fontIsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontIsLoaded) {
    return <AppLoading />;
  }

  // Handler when a number is picked by the user
  const pickedNumberHandler = (pickedNum) => {
    setUserNumber(pickedNum);
    setGameOver(false);
  };

  // Function to restart the game after game over
  const restartNewGame = () => {
    setUserNumber(null);
    setTakenRounds(0);
    setGameOver(false);
  };

  // Function to update the number of rounds when game ends
  const gameOverHandler = (rounds) => {
    setGameOver(true);
    setTakenRounds(rounds);
  };

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;

  if (userNumber && !gameOver) {
    screen = (
      <GameScreen
        value={userNumber}
        setTakenRounds={setTakenRounds}
        setGameOver={gameOverHandler}
      />
    );
  } else if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundNumber={takenRounds}
        setRestartGame={restartNewGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[colors.primary700, colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.bgImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.15,
  },
});
