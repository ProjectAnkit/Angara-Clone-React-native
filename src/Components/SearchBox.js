import React,{useState} from 'react';
import { View, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const SearchBox = () => {

  const [isLoaded] = useFonts({
    "Poppins": require("./../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!isLoaded) {
    return <></>
  }

  return (
    <View style={{ backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: '#d3d3d3', flexDirection: 'row', alignItems: 'center' }}>
      <AntDesign name="search1" size={20} color="grey" style={{ marginHorizontal: 10 }} />
      <TextInput cursorColor={"#d3d3d3"} placeholder="Search Products...." style={{ flex: 1, padding: 10, fontFamily: 'Poppins' }} />
    </View>
  );
};

export default SearchBox;
