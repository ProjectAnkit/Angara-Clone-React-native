import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { useFonts } from 'expo-font';

const Banner = () => {
 
   const [isLoaded] = useFonts({
      "Poppins": require("./../../assets/fonts/Poppins-Regular.ttf"),
    });

  if(!isLoaded){
      return <></>
  }

  return (
    <View style={styles.container}>
       <Image source={{uri: "https://pngimg.com/uploads/necklace/necklace_PNG81.png"}} style={styles.image}/>

       <Text style={styles.BannerTitle}>Sparkling Brilliant Ruby</Text>

       <View style={styles.button}>
          <Text style={styles.buttonText}>SHOP NOW</Text>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
     container: {
        alignItems: "center",
        height: 500,
        width: "100%",
        backgroundColor: "#a81130",
     },
     image:{
        height: 250,
        width: 250,
        alignSelf: "center",
     },
     button:{
        height: 20,
        margin: 10,
        width: 80,
        alignItems: "center",
        backgroundColor: "#f5c57b"
     },
     BannerTitle:{
        fontSize: 24,
        color: "#f5c57b",
        fontFamily: 'Poppins', 
     },
     buttonText:{
        fontSize: 13,
        fontWeight: "500",
        color: "#a81130",
        fontFamily: 'Poppins', 
     }

});

export default Banner;

