import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

// Definindo o tipo dos props
interface IndexProps {
  movieURL: any; 
  name: string;
}

export const Index: React.FC<IndexProps> = (props) => {
  return (
    <TouchableOpacity>
      <Image style={styles.img} source={props.movieURL} alt={props.name} />
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
    img:{
        marginLeft: 20
    },
})
