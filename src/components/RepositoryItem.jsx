import { View, Image } from "react-native";
import { StyleSheet } from "react-native";
import StyleText from "./StyleText";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 8,
  },
  language: {
    padding: 4,
    alignSelf: "flex-start",
    borderRadius: 4,
    color: "white",
    backgroundColor: "#586069",
    margin: 4,
  },
  header: {
    flexDirection: "row",
  },

  description: {
    paddingLeft: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  stats: {
    alignItems: "center",
  },
});

const Header = () => {};

export default function RepositoryItem({
  id,
  ownerAvatarUrl,
  description,
  fullName,
  language,
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) {
  return (
    <View key={id} style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.image}></Image>
        <View style={styles.description}>
          <StyleText title bold>
            {fullName}
          </StyleText>
          <StyleText caption> {description}</StyleText>

          <StyleText style={styles.language}>{language}</StyleText>
        </View>
      </View>

      <View style={styles.items}>
        <View style={styles.stats}>
          <StyleText text>Star:</StyleText>
          <StyleText text>{stargazersCount}</StyleText>
        </View>

        <View style={styles.stats}>
          <StyleText text>Forks: </StyleText>
          <StyleText text>{forksCount}</StyleText>
        </View>

        <View style={styles.stats}>
          <StyleText text>Review:</StyleText>
          <StyleText text>{reviewCount}</StyleText>
        </View>

        <View style={styles.stats}>
          <StyleText text>Rating:</StyleText>
          <StyleText text>{ratingAverage}</StyleText>
        </View>
      </View>
    </View>
  );
}
