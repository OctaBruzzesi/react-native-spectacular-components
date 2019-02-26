import React from 'react';
import { View } from 'react-native';
import { dimensions } from '../../styles';

const CardSection = (props) => (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: dimensions.box.middle,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
