import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Ratnas from '../Gems.json';
import { useFonts } from 'expo-font';

const RatnaType = () => {

  const [isLoaded] = useFonts({
    "Poppins": require("./../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!isLoaded) {
    return <></>
  }

  const RatanaBox = ({ name, hname, image }) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: image}} style={styles.ratanasContainer}/>      

      <View style={styles.box}>
        <Text numberOfLines={1} style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{hname}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Ratnas}
        scrollEnabled={false}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RatanaBox {...item} />}
        ListHeaderComponent={<Text style={styles.text}>Explore Navaratnas</Text>}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    alignSelf: "center",
    marginBottom: 30,
    fontFamily: 'Poppins', 
  },
  listContainer: {
    alignItems: 'center',
  },
  itemContainer: {
    position: "relative",
    flexDirection: 'Column',
    alignItems: 'center',
    marginBottom: 10,
    padding : 10,
  },
  ratanasContainer: {
    marginRight: 10,
    height: 70,
    width: 70,
    borderRadius: 30,
    zIndex: 1,
    position: "absolute",
    top: -15,
  },
  box: {
    height: 110,
    width: 110,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderWidth: 0.5,
    borderRadius: 20,
    backgroundColor: "#eeeeee",
    borderColor: "#bcbcbc",
    zIndex: 0,
  },
  title:{
    fontSize: 16,
    fontWeight: "400",
    alignSelf: "center",
    fontFamily: 'Poppins', 
  },
  subtitle:{
    fontSize: 13,
    alignSelf: "center",
    fontFamily: 'Poppins', 
  }
});

export default RatnaType;