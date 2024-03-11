import { StyleSheet } from "react-native";
import { Text } from "react-native";
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
  },
  caption: {
    fontSize: 16,
  },
  text: {
    fontSize: 14,
  },
  bold: {
    fontWeight: "bold",
  },
  color: {
    backgroundColor: "#586069",
    padding: 4,
    color: "white",
  },
  white: {
    color: "white",
  },
});

export default function StyleText({
  title,
  caption,
  text,
  bold,
  children,
  color,
  white,
  style,
  ...restOfProps
}) {
  const TextStyle = [
    title && styles.title,
    color && styles.color,
    caption && styles.caption,
    text && styles.text,
    bold && styles.bold,
    white && styles.white,
    style,
  ];
  return (
    <Text style={TextStyle} {...restOfProps}>
      {children}
    </Text>
  );
}
