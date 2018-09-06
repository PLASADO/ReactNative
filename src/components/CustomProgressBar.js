import React, { Component } from 'react';
import { View, Animated, Easing, Text } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import styles from "../screens/main/styles/styles";

class CustomProgressBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
    this.widthAnimation = new Animated.Value(0);
    this.widthAnimation.addListener(this.setProgress);
  }

  componentDidMount() {
    this.animateWidth();
  }

  setProgress = ({ value }) => {
    if (Math.floor(value) !== this.state.progress) {
      this.setState({ progress: Math.floor(value) });
    }
  }

  animateWidth() {
    Animated.timing(this.widthAnimation, {
      easing: Easing[this.props.barEasing],
      toValue: this.props.toValue,
      duration: this.props.barAnimationDuration,
    }).start();
  }

  render() {
    return (
      <View
        style={{
          width: this.props.width,
          height: this.props.height,
          borderWidth: this.props.borderWidth,
          borderColor: this.props.borderColor,
          borderRadius: this.props.borderRadius,
          backgroundColor: 'white',
          overflow: 'hidden'
        }}
      >
        <Text style={styles.text}>{this.state.progress}%</Text>
        <Animated.View
          style={{
            height: this.props.height - (this.props.borderWidth * 2),
            width: Animated.diffClamp(
              Animated.add(
                -(2 * this.props.borderWidth),
                Animated.multiply(this.props.width / 100, this.widthAnimation),
              ),
              0,
              this.props.width
            ),
          }}
        >
          <LinearGradient
            style={[styles.linearGradient, { borderRadius: this.props.borderRadius }]}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
            colors={['#4FCAAF', '#90D671']}
          />
        </Animated.View>
      </View>
    );
  }
}

export default CustomProgressBar;

CustomProgressBar.propTypes = {
  toValue: PropTypes.number,
  barEasing: PropTypes.oneOf([
    'bounce',
    'cubic',
    'ease',
    'sin',
    'linear',
    'quad',
  ]),
  barAnimationDuration: PropTypes.number,
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string
};

CustomProgressBar.defaultProps = {
  toValue: 100,
  barEasing: 'linear',
  barAnimationDuration: 500,
  height: 15,
  borderWidth: 1,
  borderColor: '#C8CCCE',
  borderRadius: 6,
  backgroundColor: '#148cF0',
};
