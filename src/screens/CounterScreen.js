import React, { useReducer } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {...state, counter: state.counter + action.payload}
    case 'decrement': 
      return {... state, counter: state.counter + action.payload}

    default:
        return state
  }
}
const CounterScreen = () => {
  //const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, {counter: 0})

  return (
    <View>
      <Button title="increase" onPress={() => dispatch({type: 'increment', payload: 1})} />
      <Button title="decrease" onPress={() => dispatch({type: 'decrement', payload: -1})} />
      <Text>{state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
