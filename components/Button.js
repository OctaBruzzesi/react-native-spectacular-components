import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import { colors, dimensions } from '../../styles';

const getTypeStyles = type => {
  switch (type) {
    case 'transparent':
      return {
        backgroundColor: 'transparent',
        borderColor: '#A6ACBE'
      };
    case 'secondary':
      return {
        backgroundColor: colors.secondaryColor,
        borderColor: colors.secondaryColor
      };
    default:
      return {
        backgroundColor: colors.primaryColor,
        borderColor: colors.primaryColor
      };
  }
};

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity
      style={[
        buttonStyle,
        props.buttonStyle,
        getTypeStyles(props.type)
      ]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={[textStyle, props.textStyle]}>
        {props.placeholder}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    borderRadius: 11,
    borderWidth: 1,
    height: dimensions.dataInput,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 21,
    fontWeight: '500'
  }
};

Button.propTypes = {
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'transparent']),
  onPress: PropTypes.func
};

Button.defaultProps = {
  buttonStyle: {},
  type: 'primary',
  textStyle: {},
  placeholder: '',
  onPress: () => {}
};

export { Button };
