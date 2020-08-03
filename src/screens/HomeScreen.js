import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {

  return (
    <View>
     
      <Button 
      title="Go to Componenents Demo" 
      onPress={() => navigation.navigate('Components')}
      />
      <Button 
      title="Go to List Demo" 
      onPress={() => navigation.navigate('List')}
      />
      <Button 
      title="Go to Image Demo" 
      onPress={() => navigation.navigate('Image')}
      />
      <Button 
      title="Go to Counter Demo" 
      onPress={() => navigation.navigate('Counter')}
      />
      <Button 
      title="Go to Color Demo" 
      onPress={() => navigation.navigate('Color')}
      />
      <Button 
      title="Go to SquareScreen Demo" 
      onPress={() => navigation.navigate('Square')}
      />
      <Button 
      title="Go to TextScreen Demo" 
      onPress={() => navigation.navigate('TextScreen')}
      />
      <Button 
      title="Go to BoxScreen" 
      onPress={() => navigation.navigate('BoxScreen')}
      />
    </View>
  )
};

const styles = StyleSheet.create({});

export default HomeScreen;
