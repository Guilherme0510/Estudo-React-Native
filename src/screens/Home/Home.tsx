import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import MovieTheWhell from "../../assets/movies/the_wheel_of_time.png";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESWATCH } from "../../utils/moviesWatch";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { Index } from "@/src/components/MovieCard";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.primeLogoImg} source={PrimeVideoLogo} />
        <Image style={styles.amazonLogoImg} source={AmazonLogo} />
      </View>

      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.text_category}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text_category}>TV Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text_category}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text_category}>Kids</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
        <TouchableOpacity style={styles.movieImgThumbnail}>
          <Image source={MovieTheWhell} />
        </TouchableOpacity>

        <Text style={styles.titleImg}>Continue Watching</Text>
        <FlatList
          data={MOVIESWATCHING}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Index movieURL={item.moviesURL} name={item.name} />
          )}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.titleImg}>Crime Movies</Text>
        <FlatList
          data={MOVIESCRIME}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Index movieURL={item.moviesURL} name={item.name} />
          )}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.titleImg}>Watch in your language</Text>
        <FlatList
          data={MOVIESWATCH}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Index movieURL={item.moviesURL} name={item.name} />
          )}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.titleImg}>Trend Movies</Text>
        <FlatList
          data={MOVIESWATCH}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Index movieURL={item.moviesURL} name={item.name} />
          )}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232F3E",
    alignItems: "flex-start",
  },

  header: {
    width: "100%",
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  primeLogoImg: {
    marginTop: -40,
  },
  amazonLogoImg: {
    marginTop: -40,
    marginLeft: 30,
  },
  category: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
    marginBottom: 15,
  },
  titleImg: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    padding: 15,
  },
  text_category: {
    color: "#fff",
  },
  movieImgThumbnail: {
    width: "100%",
    alignItems: "center",
  },
  contentList: {
    paddingRight: 30,
  },
  contentMovies:{},
});
