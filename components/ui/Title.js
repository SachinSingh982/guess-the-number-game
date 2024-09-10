import React from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const Title = ({ children }) => {
  return (
    <>
      <Text style={styles.title}>{children}</Text>
    </>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: colors.accent500,
    padding: 12,
  },
});
