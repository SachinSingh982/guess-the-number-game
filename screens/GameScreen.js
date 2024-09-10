import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/number-conatiner";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

// Generate a random number between min and max, excluding the specified number
const genrateRandomNumber = (min, max, exclude) => {
  const rndmNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndmNum === exclude) {
    return genrateRandomNumber(min, max, exclude);
  }

  return rndmNum;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ value, setGameOver, setTakenRounds }) => {
  const initalGuess = genrateRandomNumber(1, 100, value);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);
  const [guessRounds, setGuessRounds] = useState([initalGuess]);

  // Effect to check if the number is guessed correctly
  useEffect(() => {
    if (currentGuess === value) {
      setGameOver(true, guessRounds);
      setTakenRounds(guessRounds.length);
    }
  }, [currentGuess, value, setGameOver, guessRounds]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [value]);

  // Function to handle guessing logic
  const guessNextNumber = (direction) => {
    if (
      (direction === "lower" && currentGuess < value) ||
      (direction === "higher" && currentGuess > value)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    // Update boundaries based on the user's input
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    // Generate a new random number within updated boundaries
    const newRndmNum = genrateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndmNum);
    setGuessRounds((prevRounds) => [newRndmNum, ...prevRounds]);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <InstructionText style={styles.instrText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonBox}>
          <View style={styles.button}>
            <PrimaryButton onPress={guessNextNumber.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>

          <View style={styles.button}>
            <PrimaryButton onPress={guessNextNumber.bind(this, "higher")}>
              <Ionicons name="add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRounds.length - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 36,
  },

  instrText: {
    marginBottom: 12,
  },

  buttonBox: {
    flexDirection: "row",
  },
  button: { flex: 1 },
});
