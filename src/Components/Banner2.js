import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';

const Banner2 = () => {

  const [isLoaded] = useFonts({
    "Poppins": require("./../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!isLoaded) {
    return <></>
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.bannerText}>Discover ancient</Text>
        <Text style={styles.bannerText}>treasure for</Text>
        <Text style={styles.bannerText}>Modern souls</Text>
      </View>
      <Image source={{uri: "https://www.josalukkasmedia.com/Media/original_jos-alukkas-product-btuquv.png"}} style={{height: 140,width: 140}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: "100%",
    borderRadius: 20,
    flexDirection: "row",
    backgroundColor: "#db9d5c",
  },
  textContainer: {
    flexDirection: "column",
    paddingLeft: 40,
    paddingTop: 30,
  },
  bannerText: {
    color: 'black',
    fontSize: 18,
    alignItems: "center",
    fontWeight: "400",
    fontFamily: "Poppins"
  },
});

export default Banner2;
