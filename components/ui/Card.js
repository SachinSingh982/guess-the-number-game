import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const Card = ({ children }) => {
  return (
    <>
      <View style={styles.inputContainer}>{children}</View>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginTop: 36,
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
});
