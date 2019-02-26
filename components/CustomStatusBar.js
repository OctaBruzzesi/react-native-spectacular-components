import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';
  
const CustomStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = {
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
};

CustomStatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired
};

export { CustomStatusBar };
