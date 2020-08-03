import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Image Screen</Text>
      <ImageDetail title="Forest" imageSource={require("../../assets/forest.jpg")} imageScore={9}/>
      <ImageDetail title="Beach" imageSource={require("../../assets/beach.jpg")} imageScore={6}/>
      <ImageDetail title="Mountain" imageSource={require("../../assets/mountain.jpg")} imageScore={10}/>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: "center",
  },
});

export default ImageScreen;
