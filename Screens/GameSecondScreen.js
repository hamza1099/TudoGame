import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import Card from '../Components/Card';
import Color from '../Constant/Color';
const GenerateNumberBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return GenerateNumberBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

export default function GameSecondScreen(props) {
  const [currentGuess, setCurrentGuess] = useState(
    GenerateNumberBetween(1, 100, props.userChoice),
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [rounds, setRound] = useState(0);
  const {onGameOver, userChoice} = props;
  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);
  const nextguesshandler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie", 'You know that is wrong', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const NextNumber = GenerateNumberBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(NextNumber);
    setRound(curRound => curRound + 1);
  };
  return (
    <View
      style={{
        marginTop: 20,
        alignItems: 'center',
      }}>
      <Card style={styles.ChoosenContainer}>
        <Text>Opponent's Guess</Text>
        <View style={styles.numberContainerStyle}>
          <Text style={styles.numberStyle}>{currentGuess}</Text>
        </View>
        <View style={styles.ButtonContainer}>
          <Button
            title="LOWER"
            onPress={nextguesshandler.bind(this, 'lower')}
          />
          <Button
            title="GREATER"
            onPress={nextguesshandler.bind(this, 'greater')}
          />
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  ChoosenContainer: {
    alignItems: 'center',
    width: 300,
    maxWidth: '80%',
  },
  numberContainerStyle: {
    borderWidth: 2,
    borderColor: Color.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberStyle: {
    fontSize: 22,
    color: Color.accent,
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});
