import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

const JewelleryCategory = () => {

  const [isLoaded] = useFonts({
    "Poppins": require("./../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!isLoaded) {
    return <></>
  }

  return (
    <View style={styles.boxContainer}>
    <TouchableOpacity style={styles.box}>
        <View>
            <Text style={styles.title}>Navaratna</Text>
            <Text style={styles.subtitle}>Jewellery</Text>
            <View style={{ width: '100%', height: 1, backgroundColor: '#FFA500'}}></View>
            <Text style={styles.button}>SHOP NOW</Text>
        </View>
        <Image
            source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/402807c3-86bd-4a63-8acf-4f0c41e69f87/dg51d5n-4c762787-0988-4a23-884c-cb90581705dc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQwMjgwN2MzLTg2YmQtNGE2My04YWNmLTRmMGM0MWU2OWY4N1wvZGc1MWQ1bi00Yzc2Mjc4Ny0wOTg4LTRhMjMtODg0Yy1jYjkwNTgxNzA1ZGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mTRQ9iDtgPFGXB67rX0KS22Zl2sIgALF76ih2b5eJhE' }} 
            style={styles.image}
        />
    </TouchableOpacity>

    <TouchableOpacity style={styles.box}>
        <View>
            <Text style={styles.title}>Gemstone</Text>
            <Text style={styles.subtitle}>Recommendation</Text>
            <View style={{ width: '100%', height: 1, backgroundColor: '#FFA500'}}></View>
            <Text style={styles.button}>EXPLORE NOW</Text>
        </View>
        <Image
            source={{ uri: 'https://png.pngtree.com/png-clipart/20231224/original/pngtree-moonstone-drop-necklace-png-image_13926049.png' }} 
            style={styles.image}
        />
    </TouchableOpacity>
</View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    marginHorizontal: 8,
    justifyContent: "space-between"
  },
  box: {
    width: 180,
    height: 90,
    backgroundColor: '#E5E5EA',
    borderRadius: 10,
    paddingLeft: 6,
    paddingBottom: 5,
    flexDirection: "row",
    margin: 10,
    borderColor: "orange",
    borderWidth: 1,
  },
  image: {
    width: 60,
    height: 60,
    marginLeft: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
    fontFamily: 'Poppins', 
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    fontStyle: 'italic',
    fontFamily: 'Poppins', 
  },
  button: {
    fontSize: 12,
    color: '#FFA500',
    marginTop: 10,
    fontFamily: 'Poppins', 
  },
});

export default JewelleryCategory;
