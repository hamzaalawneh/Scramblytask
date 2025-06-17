import {StyleSheet} from 'react-native';
import {colors} from '@utils/colors';

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  disabled: {
    backgroundColor: colors.buttonDisabled,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  primaryText: {
    color: colors.surface,
  },
  disabledText: {
    color: colors.textDisabled,
  },
});
