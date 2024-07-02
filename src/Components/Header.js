import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
          <TouchableOpacity>
             <Ionicons name="menu-outline" size={28} color="black" style={[styles.iconstyle,{marginTop: 6}]}/>
          </TouchableOpacity>
          <Text style={styles.Logo}>VEDIC GEMS</Text>
       </View>

       <View style={styles.options}>
         <TouchableOpacity>
            <Ionicons name="person-outline" size={24} color="black" style={styles.iconstyle}/>
         </TouchableOpacity>
         
         <TouchableOpacity>
            <SimpleLineIcons name="handbag" size={24} color="black" style={styles.iconstyle}/>
         </TouchableOpacity>
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
    paddingVertical: 10,
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
    paddingRight: 13,
  }
});

export default Header;
