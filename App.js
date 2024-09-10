import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { colors } from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const pickedNumberHandler = (pickedNum) => {
    setUserNumber(pickedNum);
  };

  let screen = <StartGameScreen pickedNumberHandler={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen value={userNumber} setGameOver={setGameOver} />;
  }
  if (gameOver) {
    screen = <GameOverScreen />;
  }
  return (
    <>
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
    </>
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
