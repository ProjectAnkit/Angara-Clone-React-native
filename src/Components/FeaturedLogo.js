import React from 'react';
import { View, Text, StyleSheet, FlatList, Image} from 'react-native';
import FeaturedLogoData from '../FeaturedLogoData.json';
import { useFonts } from 'expo-font';

const FeaturedLogo = () => {

  const [isLoaded] = useFonts({
    "Poppins": require("./../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!isLoaded) {
    return <></>
  }

  return (
    <View>
      <Text style={styles.logoText}>Featured in</Text>
      <FlatList
       showsHorizontalScrollIndicator={false}
       data={FeaturedLogoData}
       keyExtractor={(item)=> item.id.toString()}
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
    fontFamily: 'Poppins', 
  },
  image:{
    height: 100,
    width: 100,
    marginHorizontal: 10,
  }
});

export default FeaturedLogo;
