import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <>
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
          />
        </View>
        {/* Here will be buttons */}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <PrimaryButton>Reset</PrimaryButton>
          </View>

          <View style={styles.buttonBox}>
            <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: "#4e0329",
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
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
