import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: 24,
    margin: 24,
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
  },
  text: {
    color: colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
