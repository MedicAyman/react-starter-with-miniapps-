import React, { useState } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newName) => setName(newName)}
      />

      <Text>{name}</Text>
      <Text style={styles.passwordLength}>{name.length < 5 ? 'the password lenght must be more than 5 characters' : null}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  passwordLength: {
      color: 'red'
  }
});

export default TextScreen;
