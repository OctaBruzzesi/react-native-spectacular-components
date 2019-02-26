import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { colors } from '../../styles';

const Link = (props) => (
    <Text onPress={() => props.onPress()} style={[styles.textStyle, props.style]}>
      {props.children}
    </Text>
  );

const styles = StyleSheet.create({
  textStyle: {
    color: colors.linkColor
  }
});

Link.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func,
  textStyle: PropTypes.object
};

Link.defaultProps = {
  style: {},
  onPress: () => {}
};

export default withNavigation(Link);
