import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.BoxRed}></View>
      <View style={styles.BoxGreen}></View>
      <View style={styles.BoxViolet}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  parentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  BoxRed: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  BoxGreen: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    top: 50
  },
  BoxViolet: {
    width: 100,
    height: 100,
    backgroundColor: "violet",
  },
});

export default BoxScreen;
