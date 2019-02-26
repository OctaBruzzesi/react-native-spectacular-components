import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Box = (props) => (
  <KeyboardAwareScrollView
    resetScrollToCoords={{ x: 0, y: 0 }}
    extraScrollHeight={75}
    contentContainerStyle={[styles.containerStyle, props.style]}
    scrollEnabled={props.scrollEnabled}
  >
    {props.children}
  </KeyboardAwareScrollView>
);

const styles = {
  containerStyle: {
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    flexGrow: 1
  }
};

export { Box };
