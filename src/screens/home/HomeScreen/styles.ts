import {StyleSheet} from 'react-native';
import {colors} from '@utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 16,
  },
  userEmail: {
    fontSize: 14,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 30,
  },
  listButton: {
    marginBottom: 16,
    width: '100%',
  },
  logoutButton: {
    backgroundColor: colors.danger,
    marginTop: 10,
    width: '100%',
  },
});
