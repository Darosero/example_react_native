import { View } from "react-native";
import Constants from "expo-constants";
import RepositoryList from "./RepositoryList";

export default function Main() {
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      <RepositoryList />
    </View>
  );
}
