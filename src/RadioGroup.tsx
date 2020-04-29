import React from 'react';
import {FlatList} from 'react-native';
import {RadioGroupProps} from '../App';
import RadioButton from './RadioButton';
const RadioGroup = (props: RadioGroupProps) => {
  const {items, selected, onSelected} = props;
  return (
    <FlatList
      horizontal={true}
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => (
        <RadioButton item={item} selected={selected} onSelected={onSelected} />
      )}
    />
  );
};
export default RadioGroup;
