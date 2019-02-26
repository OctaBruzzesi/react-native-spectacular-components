import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { colors } from '../../styles';

const TitleSection = (props) => (
      <View style={[styles.titleContainerStyle, props.style]}>
        <Text style={styles.textTitleStyle}>{props.placeholder}</Text>
      </View>
  );

const styles = {
  titleContainerStyle: {
    flex: 1,
    backgroundColor: colors.lighterPrimaryColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTitleStyle: {
    color: 'white',
    fontSize: 25,
  }
};

TitleSection.propTypes = {
  placeholder: PropTypes.string,
  style: PropTypes.any
};

TitleSection.defaultProps = {
  title: '',
  style: {}
};

export { TitleSection };
