import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return (
    <View>
      <Text style={[styles.instructionText, style]}>{children}</Text>
    </View>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: colors.accent500,
    fontSize: 24,
  },
});
