import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, Text, View, StyleSheet, Platform } from 'react-native';
import { dimensions, colors } from '../../styles';

const getColor = (type) => {
  switch (type) {
    case 'secondary':
      return '#888888';
    default:
      return colors.white;
  }
};

const Input = React.forwardRef((props, ref) => {
  const { inputStyle, textStyle } = styles;
  const characterRemaining = props.maxCharacter - props.value.length;
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text style={textStyle} >{props.label}</Text>
        <TextInput
          secureTextEntry={props.secureTextEntry}
          autoCapitalize={props.autoCapitalize}
          onChangeText={props.onChangeText}
          ref={ref}
          placeholder={props.placeholder}
          placeholderTextColor={getColor(props.type)}
          style={[
            inputStyle,
            props.style,
            { borderColor: props.error === '' ? getColor(props.type) : colors.error },
            { color: getColor(props.type) }
          ]}
          maxLength={props.maxCharacter}
          selectionColor={props.selectionColor}
          keyboardType={props.keyboardType}
          onSubmitEditing={props.onSubmitEditing}
          blurOnSubmit={props.blurOnSubmit}
          ref={ref}
          returnKeyType={props.returnKeyType}
          multiline={props.multiline}
          value={props.value}
        />
      </View>
      <View style={styles.feedbackContainerStyle}>
        <Text style={styles.errorTextStyle}>{props.error}</Text>
        {
          props.maxCharacter ?
            <Text style={styles.charactersRemainingTextStyle}>
              Characters Remaining: {characterRemaining}
            </Text>
            :
            null
        }
      </View>
    </View>
  );
});

const styles = {
  inputStyle: {
    color: colors.white,
    marginTop: Platform.OS === 'ios' ? dimensions.box.middle : 0,
    paddingBottom: Platform.OS === 'ios' ? 3 : 0,
    paddingRight: dimensions.box.middle,
    paddingLeft: dimensions.box.middle,
    fontSize: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.white,
    flex: 1
  },
  charactersRemainingTextStyle: {
    color: colors.inputColor,
    fontSize: 11
  },
  textStyle: {
    fontWeight: '300',
    marginLeft: dimensions.box.middle
  },
  feedbackContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  errorTextStyle: {
    marginLeft: 5,
    height: 16,
    color: colors.error
  }
};

Input.propTypes = {
  label: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  onChangeText: PropTypes.func,
  style: PropTypes.any,
  placeholder: PropTypes.string,
  selectionColor: PropTypes.string,
  multiline: PropTypes.bool,
  value: PropTypes.string
};

export { Input };
