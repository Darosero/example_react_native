import { ScrollView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { Link, usePathname } from "expo-router";
import StyleText from "./StyleText";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#737272",
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  link: {
    color: "#ccc",
    paddingRight: 20,
  },
  active: {
    color: "#fff",
  },
});

const AppBarTab = ({ children, to }) => {
  const pathname = usePathname();
  const active = pathname === to;
  const textStyle = [styles.link, active && styles.active];
  return (
    <Link href={to} style={textStyle}>
      <StyleText title bold>
        {children}
      </StyleText>
    </Link>
  );
};
export default function AppBar() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab to="/">Repository</AppBarTab>
        <AppBarTab to="/login">Login</AppBarTab>
      </ScrollView>
    </View>
  );
}
