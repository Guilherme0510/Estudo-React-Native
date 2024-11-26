import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import MovieTheWhell from "../../assets/movies/the_wheel_of_time.png";
import { MOVIESWATCHING } from '../../utils/moviesWatching'
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
      <TouchableOpacity style={styles.movieImgThumbnail}>
        <Image style={styles.movieImg} source={MovieTheWhell} />
      </TouchableOpacity>
      <FlatList
        data={MOVIESWATCHING}
        keyExtractor={item => item.id}
        renderItem={(item) => (
            <Index 
            movieURL={item.moviesURL}
            name={item.name}/>
        )}

      />
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
  text_category: {
    color: "#fff",
  },
  movieImgThumbnail:{
    width:'100%',
    alignItems:"center"
  }
});
