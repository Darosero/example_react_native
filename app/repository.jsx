import { View } from "react-native";
import AppBar from "../src/components/AppBar";
import RepositoryList from "../src/components/RepositoryList";

export default function repository() {
  return (
    <View>
      <AppBar />
      <RepositoryList />
    </View>
  );
}
