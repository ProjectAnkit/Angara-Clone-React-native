import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const SocialLinks = () => {

    const [isLoaded] = useFonts({
        "Poppins": require("./../../assets/fonts/Poppins-Regular.ttf"),
    });

    if (!isLoaded) {
        return <></>
    }
    
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.link}>
        <Ionicons name="logo-facebook" size={24} color="#444444" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Ionicons name="logo-instagram" size={24} color="#444444" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Ionicons name="logo-twitter" size={24} color="#444444" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Ionicons name="logo-youtube" size={24} color="#444444" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Fontisto name="pinterest" size={24} color="#444444" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
      <FontAwesome6 name="x-twitter" size={24} color="#444444" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: "#bcbcbc",
    padding: 20,
    fontFamily: 'Poppins',
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Poppins', 
  },
});

export default SocialLinks;
