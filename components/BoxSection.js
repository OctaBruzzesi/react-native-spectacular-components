import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { dimensions } from '../../styles';

const BoxSection = (props) => (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    padding: dimensions.box.middle,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginRight: dimensions.box.middle,
    marginLeft: dimensions.box.middle
  }
};

BoxSection.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};

BoxSection.defaultProps = {
  style: {}
};

export { BoxSection };
