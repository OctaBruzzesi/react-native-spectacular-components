import React from 'react';
import { Switch as SwitchNative } from 'react-native';
import { isAndroid } from '../../helpers/RNHelper';
import { colors } from '../../styles';

const Switch = (props) => (
    <SwitchNative
      trackColor={{ true: colors.primaryColor }}
      onValueChange={props.onValueChange}
      value={props.value}
      thumbColor={isAndroid() ? colors.white : null}
      style={props.style}
    />
  );

export { Switch };
