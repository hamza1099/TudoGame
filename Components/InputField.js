import React from 'react';
import {TextInput, View, StyleSheet, Platform} from 'react-native';

export default function InputField(props) {
  return (
    <View>
      <TextInput {...props} style={{...styles.fieldStyle, ...props.style}} />
    </View>
  );
}

const styles = StyleSheet.create({
  fieldStyle: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingVertical: Platform.OS == 'android' ? -15 : 0,
    marginVertical: 10,
    height: 30,
  },
});
