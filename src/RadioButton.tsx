import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {RadioButtonProps} from '../App';
const RadioButton = (props: RadioButtonProps) => {
  const {item, selected, onSelected} = props;
  return (
    <TouchableOpacity
      style={styles.radioButton}
      onPress={() => onSelected(item)}>
      <Text>{item.name}</Text>
      <View style={styles.button}>
        {selected?.id === item.id && <View style={styles.selectedButton} />}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    padding: 12,
  },
  button: {
    height: 24,
    width: 24,
    borderRadius: 24,
    marginStart: 8,
    borderWidth: 2,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    width: 14,
    height: 14,
    borderRadius: 14,
    backgroundColor: '#1976d2',
  },
});
export default RadioButton;