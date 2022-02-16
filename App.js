/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './Components/Header';
import GameFirstScreen from './Screens/GameFirstScreen';
import GameOverScreen from './Screens/GameOverScreen';
import GameSecondScreen from './Screens/GameSecondScreen';
const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const onRestartConfiguration = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };
  const startGameHandler = slectedNumber => {
    setUserNumber(slectedNumber);
  };
  let content = <GameFirstScreen onStartGame={startGameHandler} />;
  const onGameOverHandler = NumOfRounds => {
    setGuessRounds(NumOfRounds);
  };
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameSecondScreen
        userChoice={userNumber}
        onGameOver={onGameOverHandler}
      />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        numOfRound={guessRounds}
        numOfUser={userNumber}
        onRestartGame={onRestartConfiguration}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title={'Guess The Number'} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
