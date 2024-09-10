import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { colors } from "../constants/colors";

const StartGameScreen = ({ pickedNumberHandler }) => {
  const [value, setValue] = useState("");

  const handleOnValueChange = (enterdText) => {
    setValue(enterdText);
  };

  const handleOnConfirm = () => {
    const choosenNumber = parseInt(value);

    if (isNaN(value) || value <= 0 || value > 99) {
      Alert.alert("Invalid Number", "Number has to be number between 1 to 99", [
        { text: "Okay ", style: "destructive", onPress: handleOnReset },
      ]);
      return;
    }
    pickedNumberHandler(value);
  };

  const handleOnReset = () => {
    setValue("");
  };
  return (
    <>
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            onChangeText={handleOnValueChange}
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            value={value || ""}
          />
        </View>
        {/* Here will be buttons */}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <PrimaryButton onPress={handleOnReset}>Reset</PrimaryButton>
          </View>

          <View style={styles.buttonBox}>
            <PrimaryButton onPress={handleOnConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
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
  },
});
