import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { colors } from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ pickedNumberHandler }) => {
  const [value, setValue] = useState("");

  // Handle input change
  const handleOnValueChange = (enteredText) => {
    setValue(enteredText);
  };

  // Handle confirmation of input
  const handleOnConfirm = () => {
    const chosenNumber = parseInt(value); // Convert input to a number

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: handleOnReset },
      ]);
      return;
    }

    pickedNumberHandler(chosenNumber); // Pass the number to parent handler
  };

  // Handle input reset
  const handleOnReset = () => {
    setValue("");
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          onChangeText={handleOnValueChange}
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={value}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <PrimaryButton onPress={handleOnReset}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonBox}>
            <PrimaryButton onPress={handleOnConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },

  buttonContainer: {
    marginVertical: 16,
    flexDirection: "row",
  },

  buttonBox: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
