import { StyleSheet } from "react-native";
import { View } from "react-native";
import SearchResultCard from "../components/cards/SearchResultCard";
import TrendingCard from "../components/cards/TrendingCard";
import TitleBar from "../components/title/TitleBar";

export default function FindDesigner() {
  return (
    <View style={styles.container}>
      <TitleBar title={"Find Fashion Designers"} />
      <TrendingCard />
      <SearchResultCard />
      <SearchResultCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
