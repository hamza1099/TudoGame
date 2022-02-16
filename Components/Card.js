import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Card(props) {
  return (
    <View>
      <View style={{...styles.card, ...props.style}}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
    backgroundColor: 'white',
    elevation: 10,
    padding: 20,
    borderRadius: 10,
  },
});
