import React from 'react';
import { View, Text, StyleSheet, FlatList, Image} from 'react-native';
import PartnersLogoData from '../Partners.json';
import { useFonts } from 'expo-font';

const PartnersLogo = () => {

  const [isLoaded] = useFonts({
    "Poppins": require("./../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!isLoaded) {
    return <></>
  }

  return (
    <View>
      <Text style={styles.logoText}>Our Partners</Text>
      <FlatList
       data={PartnersLogoData}
       keyExtractor={(item)=> item.id.toString()}
       showsHorizontalScrollIndicator={false}
       renderItem={({item})=> (<Image source={{uri: item.image}} style={styles.image}></Image>)}
       horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoText: {
    fontSize: 18,
    alignSelf: "center",
    color: '#333',
    marginBottom: 10,
    fontFamily: 'Poppins',
  },
  image:{
    height: 50,
    width: 130,
    marginHorizontal: 20,
  }
});

export default PartnersLogo;
