import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 56,
    borderRadius: 8
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: theme.colors.line
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500
  },
  icon: {
    width: 24,
    height: 18
  }
})