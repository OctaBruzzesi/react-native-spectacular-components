import { StyleSheet } from 'react-native';

const utils = {
  shadow: {
    thin: {
      shadowColor: 'black',
      shadowOpacity: 1,
      shadowRadius: StyleSheet.hairlineWidth,
      shadowOffset: {
        height: StyleSheet.hairlineWidth,
      },
      borderBottomWidth: 0
    }
  }
};

export { utils };
