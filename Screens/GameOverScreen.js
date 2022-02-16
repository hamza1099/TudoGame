import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Color from '../Constant/Color';
import Card from '../Components/Card';
export default function GameOverScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.ImgContainer}>
        <Image
          source={require('../Assets/Success.png')}
          style={styles.Img}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
        }}>
        <Card style={styles.ChoosenContainer}>
          <Text style={styles.titles}>Game Over</Text>
          <View style={styles.numberContainerStyle}>
            <Text style={styles.numberStyle}>
              Number Of Rounds :{' '}
              <Text style={{color: Color.primary}}>{props.numOfRound}</Text>
            </Text>
          </View>
          <View style={styles.numberContainerStyle}>
            <Text style={styles.numberStyle}>
              User Number :{' '}
              <Text style={{color: Color.primary}}> {props.numOfUser} </Text>
            </Text>
          </View>
          <View style={styles.ButtonContainer}>
            <Button title="RESTART" onPress={props.onRestartGame} />
          </View>
        </Card>
      </View>
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
  titles: {
    fontSize: 20,
    fontWeight: '700',
  },
  ImgContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'grey',
    overflow: 'hidden',
    marginVertical: 20,
  },
  Img: {
    height: '100%',
    width: '100%',
  },
});
