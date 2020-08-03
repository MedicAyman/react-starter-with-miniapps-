import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20, textDecorationLine: 'underline'}}>{color}</Text>
            <Button onPress={() => onIncrease()} title="Increase"/>
            <Button onPress={() => onDecrease()} title="Decrease"/>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ColorCounter;
