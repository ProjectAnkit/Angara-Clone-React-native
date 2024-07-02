import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const Header = () => {

  const [isLoaded] = useFonts({
    "Poppins": require("./../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!isLoaded) {
    return <></>
  }

  return (
    <View style={styles.container}>
       <View style={styles.Banner}>
          <Ionicons name="menu-outline" size={28} color="black" style={styles.iconstyle}/>
          <Text style={styles.Logo}>VEDIC GEMS</Text>
       </View>

       <View style={styles.options}>
         <Ionicons name="person-outline" size={24} color="black" style={styles.iconstyle}/>
         <SimpleLineIcons name="handbag" size={24} color="black" style={styles.iconstyle}/>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 10,
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  Banner:{
    flexDirection: "row",
  },
  Logo:{
    marginTop: 8,
    fontWeight: "600",
    fontSize: 16,
    paddingLeft: 65,
    fontFamily: 'Poppins',
  },
  options:{
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  iconstyle:{
    alignSelf: "center",
    paddingHorizontal: 8,
  }
});

export default Header;
