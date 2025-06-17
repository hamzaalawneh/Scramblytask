import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';
import {CustomButtonProps} from './types';

const CustomButton: React.FC<CustomButtonProps> = ({title, onPress, style, textStyle, disabled = false}) => {
  const buttonStyle = [styles.button, styles.primary, disabled && styles.disabled, style];

  const buttonTextStyle = [styles.buttonText, styles.primaryText, disabled && styles.disabledText, textStyle];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress} disabled={disabled}>
      <Text style={buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
