import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Card from '../Components/Card';
import Color from '../Constant/Color';
import InputField from '../Components/InputField';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function GameFirstScreen(props) {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');
  const onChangeHandler = e => {
    setEnteredValue(e.replace(/[^0-9]/g, ''));
  };
  const onResetHandler = () => {
    setEnteredValue('');
  };
  const onConfirmHandler = () => {
    const ChoosenNumber = parseInt(enteredValue);
    if (isNaN(ChoosenNumber) || ChoosenNumber <= 0 || ChoosenNumber > 99) {
      Alert.alert('Invalid Number', 'Enter the value between 1 to 99', [
        {text: 'Okay', style: 'destructive', onPress: onResetHandler},
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(ChoosenNumber);
    setEnteredValue('');
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.firstScreenMain}>
        <Text style={styles.firstScreenTitle}>The Game First Screen</Text>
        <Card style={styles.inputContainer}>
          <Text>Select A Number</Text>
          <InputField
            keyboardType="number-pad"
            maxLength={2}
            blurOnSubmit
            autoCorrect={false}
            style={styles.InputStyles}
            onChangeText={onChangeHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}>
              <Button
                title="Reset"
                color={Color.accent}
                onPress={onResetHandler}
              />
            </View>
            <View style={styles.buttonStyle}>
              <Button
                title="Confirm"
                color={Color.primary}
                onPress={onConfirmHandler}
              />
            </View>
          </View>
        </Card>
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Text>
            {confirmed ? (
              <Card style={styles.ChoosenContainer}>
                <Text>Your Choosen Number</Text>
                <View style={styles.numberContainerStyle}>
                  <Text style={styles.numberStyle}>{selectedNumber}</Text>
                </View>
                <Button
                  title="START GAME"
                  onPress={() => props.onStartGame(selectedNumber)}
                />
              </Card>
            ) : (
              ' '
            )}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  firstScreenMain: {
    alignItems: 'center',
    flex: 1,
    padding: 10,
  },
  buttonStyle: {
    width: 100,
  },
  firstScreenTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    alignItems: 'center',
    width: 300,
    maxWidth: '80%',
  },
  ChoosenContainer: {
    alignItems: 'center',
    width: 300,
    maxWidth: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
  },
  InputStyles: {
    width: 50,
    textAlign: 'center',
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
});
