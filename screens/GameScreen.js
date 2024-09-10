import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/number-conatiner";
import PrimaryButton from "../components/ui/PrimaryButton";

const genrateRandomNumber = (min, max, exclude) => {
  const rndmNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndmNum === exclude) {
    return genrateRandomNumber(min, max, exclude);
  }

  return rndmNum;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ value, setGameOver }) => {
  const initalGuess = genrateRandomNumber(minBoundary, maxBoundary, value);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);

  // useefect hook to check if the number is matched
  useEffect(() => {
    console.log("Sdfsdf");
    if (currentGuess == value) {
      setGameOver(true);
    }
  }, [currentGuess]);

  // Function to guess the next number
  const guessNextNumber = (direc) => {
    if (
      (direc === "lower" && currentGuess < value) ||
      (direc === "higher" && currentGuess > value)
    ) {
      Alert.alert("Don't lie", "You know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direc === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndmnuM = genrateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndmnuM);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={guessNextNumber.bind(this, "higher")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={guessNextNumber.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </View>

      <View>{/* All the logs */}</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 36,
  },
});
