import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Animated, Easing, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import Accordion from 'react-native-collapsible/Accordion';
import { CardSection, Card } from '../../../components';
import { colors, dimensions } from '../../../styles';

const upButton = require('../../../assets/up_button.png');
const backgroundHelper = require('../../../assets/background-helper.png');
const defaultBackground = require('../../../assets/default_background.jpg');

const SECTIONS_ONE = [
  [
      {
      title: 'First Content',
      subtitle: 'I am the first one',
      content: [
        {
          title: 'First section',
          content: 'First'
        },
        {
          title: 'Second section',
          content: 'Second'
        }, {
          title: 'Third section',
          content: 'Third'
        }]
    }
  ],
  [
    {
      title: 'Second title',
      subtitle: 'I am the second one',
      content: [
        {
          title: 'First section',
          content: 'First'
        }
      ]
    },
  ]
];

class BusinessInfo extends Component {
  constructor(props) {
    super(props);

    this.upButtonRotation = new Animated.Value(0);
    this.firstButtonRotation = new Animated.Value(0);
    this.secondButtonRotation = new Animated.Value(0);

    this.spin = this.spin.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  spin(buttonRotation) {
    buttonRotation.setValue(0);
    Animated.timing(
      buttonRotation,
      {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      }
    ).start();
  }

  renderSectionTitle(section) {
    return (
      <View style={styles.titleContainerStyle}>
        <Text>{section.content}</Text>
      </View>
    );
  }

  renderHeader(section, i, isActive) {
    let buttonRotation = {};
    if (section.title === 'Core Business Content') {
      buttonRotation = this.businessContentButtonRotation;
      this.spin(buttonRotation);
    } else {
      buttonRotation = this.extendedBusinessContentButtonRotation;
      this.spin(buttonRotation);
    }
    const spin = buttonRotation.interpolate({
      inputRange: [0, 1],
      outputRange: isActive ? ['0deg', '180deg'] : ['180deg', '0deg']
    });
    
    return (
        <CardSection style={styles.headerStyle}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.headerContentContainerStyle}>
              <Text style={styles.headerTextStyle}>{section.title}</Text>     
              <Text style={styles.textStyle}>{section.subtitle}</Text>
            </View>  
              <Animated.Image
                style={[styles.upButtonStyle, {
                  transform: [{ rotate: spin }]
                }]}
                source={upButton}
                resizeMode="contain"
              />
            </View>
        </CardSection>
    );
  }

  renderContent(section) {
    return (
      section.content.map(item => {
        return (<View />)
      })
    );
  }

  renderAccordion() {

    SECTIONS_ONE.map(section =>
      <Card key={section[0].title}>
        <Accordion
          style={styles.accordionStyle}
          sections={section}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent.bind(this)}
        />
      </Card>
    );
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {this.renderAccordion()}
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessInfo);

BusinessInfo.propTypes = {
  navigation: PropTypes.object.isRequired,
  info: PropTypes.object.isRequired,
  businessInfo: PropTypes.object.isRequired,
  fetchBusinessLocations: PropTypes.func.isRequired
};

const styles = {
  titleContainerStyle: {
    marginTop: dimensions.box.veryLong,
    padding: dimensions.box.long
  },
  headerTextStyle: {
    fontSize: 16,
    fontWeight: '300',
    marginTop: dimensions.box.middle,
    marginBottom: dimensions.box.middle,
    marginLeft: dimensions.box.middle
  },
  accordionStyle: {
  },
  headerStyle: {
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    minHeight: 85,
    paddingBottom: dimensions.box.thick
  },
  bannerTitleTextStyle: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: '300',
    fontSize: 21
  },
  contentHeaderTextStyle: {
    fontWeight: '300'
  },
  textStyle: {
    marginLeft: dimensions.box.middle,
    fontSize: 12,
    color: '#444444',
    fontWeight: '300'
  },
  upButtonStyle: [
    dimensions.square.thin,
    {
      alignSelf: 'center',
      flex: 1,
      tintColor: '#888888'
    }
  ],
  introductionTextStyle: {
    color: '#333333',
    fontSize: 12,
    fontWeight: '300'
  },
  backgroundImageStyle: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: undefined,
    height: 125
  },
  introductionContainerStyle: {
    marginRight: 0,
    marginLeft: 0,
    padding: dimensions.box.long
  },
  contentContainerStyle: {
    marginTop: dimensions.box.middle,
    marginBottom: dimensions.box.middle,
    flexDirection: 'column'
  },
  headerContentContainerStyle: {
    flex: 8
  },
  contentSectionTextStyle: {
    color: '#888888',
    fontSize: 11,
    marginTop: dimensions.box.middle
  },
  sectionContentTextStyle: {
    marginLeft: dimensions.box.long,
    marginTop: dimensions.box.middle
  },
  inputStyle: {
    fontSize: 11,
  }
};
