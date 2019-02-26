import React from 'react';
import PropTypes from 'prop-types';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { colors, dimensions } from '../../styles';

const forwardButtonImage = require('../../assets/forward_button.png');

const SelectableSection = (props) => (
    <TouchableOpacity style={styles.containerStyle} onPress={props.onPress}>
      {props.icon !== null ? 
        <Image source={{ uri: props.icon }} onError={() => {}}style={styles.iconStyle} />
        :
        null
      }
      <View style={styles.menuStyle}>      
        <Text style={styles.textStyle} >{props.placeholder}</Text>
        <Image
                    source={forwardButtonImage}
                    style={styles.forwardButtonImageStyle}
                    resizeMode={'contain'}
        />
      </View>
    </TouchableOpacity>
  );

const styles = {
  containerStyle: {
    flex: 1,
    padding: dimensions.box.middle,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#EAEAEA',
    position: 'relative',
    height: 61
  },
  textStyle: {
    fontSize: 21,
    fontWeight: '400',
    color: colors.primaryColor
  },
  iconStyle: dimensions.square.middle,
  forwardButtonImageStyle: [
    {
      tintColor: colors.primaryColor
    },
    dimensions.square.middle
  ],
  menuStyle: {
    flexDirection: 'row',
    height: 61,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: dimensions.box.thick,
    borderBottomWidth: dimensions.box.thin,
    borderColor: '#ddd'
  }
};

SelectableSection.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

export { SelectableSection };
