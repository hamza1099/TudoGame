import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Color from '../Constant/Color';
export default function Header(props) {
  return (
    <View>
      <View style={styles.mainTitle}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainTitle: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.primary,
    paddingTop: 36,
  },
  titleText: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
  },
});
