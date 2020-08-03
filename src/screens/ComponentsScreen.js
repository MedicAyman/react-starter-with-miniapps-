import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Ayman";
  return (
    <View>
      <Text style={styles.main}>Getting started with react native</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    fontSize: 48,
  },
  name:{
      fontSize: 20,
  }
});

export default ComponentsScreen;
