import { View, Text } from "react-native";
import RepositoryList from "../src/components/RepositoryList";
import AppBar from "../src/components/AppBar";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <RepositoryList />
    </View>
  );
}
