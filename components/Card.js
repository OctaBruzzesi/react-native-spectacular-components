import React from 'react';
import { View } from 'react-native';
import { dimensions } from '../../styles';

const Card = (props) => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    borderWidth: dimensions.box.thin,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    marginTop: dimensions.box.thin
  }
};

export { Card };
