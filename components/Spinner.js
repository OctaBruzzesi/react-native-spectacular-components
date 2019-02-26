import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { dimensions } from '../../styles';

const Spinner = (props) => (
    <View style={[styles.spinnerStyle, props.style]}>
      <ActivityIndicator
        size={props.large || 'large'}
        color={props.color}
      />
    </View>
  );

const styles = {
  spinnerStyle: {
    flex: 1,
    height: dimensions.dataInput,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
