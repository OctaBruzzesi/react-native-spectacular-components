import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, WebView, TouchableOpacity, Platform, SafeAreaView } from 'react-native';
import { withNavigation } from 'react-navigation';
import DeviceInfo from 'react-native-device-info';
import { colors, dimensions, utils } from '../../styles';
import { BackButtonImage, Spinner } from './';

const WEBVIEW_REF = 'WEBVIEW_REF';

class CustomWebView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      canGoBackWebView: false,
      title: this.getTitle(props),
      source: this.getSource(props),
      canGoBackNavigation: this.getCanGoBackNavigation(props),
      loadEnd: false
    };
  }

  onNavigationStateChange = (navState) => {
    this.setState({
      canGoBackWebView: navState.canGoBack
    });
  };

  onBack = () => {
    if (this.state.canGoBackWebView && !this.props.preventBackWebView) {
      this.refs[WEBVIEW_REF].goBack();
    } else {
      this.props.navigation.goBack();
    }
  };

  getSource(props) {
    const uri = this.getUri(props);
    const { source } = this.props;
    if (uri) {
      return { source: { uri } };
    } 
      return { source };
  }

  getUri = (props) => {
    const params = props.navigation.state.params;
    if (params && params.uri) {
      return params.uri;
    }
    return props.uri;
  }

  getTitle(props) {
    const params = props.navigation.state.params;
    if (params && params.title) {
      return params.title;
    }
    return props.title;
  }

  getCanGoBackNavigation = props => {
    const params = props.navigation.state.params;
    if (params) {
      return params.canGoBackNavigation;
    }
    return props.canGoBackNavigation;
  }

  getMarginBottom() {
    if (DeviceInfo.hasNotch()) {
      return -6;
    }
    if (Platform.OS === 'ios') {
      return -5.5;
    }
    return -9.5;
  }

  showButton = props => {
    const canGoBack =
      this.state.canGoBackWebView || this.getCanGoBackNavigation(props);
    if (canGoBack) {
      return styles.buttonStyle;
    }
    return {
      width: 0,
      opacity: 0
    };
  }

  render() {
    const { canGoBackWebView, loadEnd, canGoBackNavigation, title } = this.state;
    const showTitle = title && (canGoBackWebView || canGoBackNavigation);
    const showSpinner = !loadEnd && this.props.showSpinnerOnLoad;
    return (
      <View style={styles.containerStyle}>
        <SafeAreaView
          style={[
            styles.topbarStyle,
            {
              justifyContent: showTitle ? 'space-between' : 'flex-start'
            }
          ]}
        >
          <TouchableOpacity
            style={[
              this.showButton(this.props)
            ]}
            disabled={!(canGoBackWebView || canGoBackNavigation)}
            onPress={this.onBack.bind(this)}
          >
            <BackButtonImage />
          </TouchableOpacity>
          <Text style={styles.titleText}>{title}</Text>
          <View 
            style={[
              dimensions.square.middle,
              {
                marginRight: dimensions.box.thick
              }
            ]}
          />
        </SafeAreaView>
        <Spinner style={{ display: showSpinner ? 'flex' : 'none' }} />
        <WebView
          ref={WEBVIEW_REF}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          useWebKit
          domStorageEnabled
          javaScriptEnabled
          onLoadEnd={() => this.setState({ loadEnd: true })}
          {...this.state.source}
          style={{ display: !showSpinner ? 'flex' : 'none' }}
        />
      </View>
    );
  }
}

const styles = {
  buttonStyle: {
    marginLeft: dimensions.box.thick,
    alignSelf: 'center'
  },
  backButtonImageStyle: {
    tintColor: '#fff',
    alignSelf: 'flex-end',
  },
  titleText: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: isIOS() ? 17 : 20,
    fontWeight: '500'
  },
  containerStyle: {
    flex: 1,
  },
  topbarStyle: [
    {
      height: DeviceInfo.hasNotch() ? 88 : dimensions.barHeight,
      elevation: 4,
      backgroundColor: colors.primaryColor,
      alignItems: 'flex-end',
      flexDirection: 'row'
    },
    utils.shadow.thin
  ]
};

CustomWebView.propTypes = {
  uri: PropTypes.string,
  source: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  title: PropTypes.string,
  preventBackWebView: PropTypes.bool,
  canGoBackNavigation: PropTypes.bool,
  onLoadEnd: PropTypes.func,
  showSpinnerOnLoad: PropTypes.bool
};

CustomWebView.defaultProps = {
  title: '',
  preventBackWebView: false,
  canGoBackNavigation: false,
  showSpinnerOnLoad: false
};

export default withNavigation(CustomWebView);
