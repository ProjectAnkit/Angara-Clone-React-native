import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const MoreOptions = () => {

  const [isLoaded] = useFonts({
    "Poppins": require("./../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!isLoaded) {
    return <></>
  }

  const OptionView = ({text}) => {
    return(
      <TouchableOpacity>
         <View style={styles.box}>
             <Text style={styles.text}>{text}</Text>
             <Ionicons name="add" size={24} color="black" />
         </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
       <OptionView text={"Customer Service"}/>
       <OptionView text={"About Us"}/>
       <OptionView text={"Why Vedicgems?"}/>
       <View style={styles.box}>
          <TouchableOpacity>
             <Text style={{fontWeight: "500",fontSize: 14, fontFamily: 'Poppins'}}>Refer a Friend</Text>
          </TouchableOpacity>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    alignSelf: "center",
    fontSize: 16,
    fontFamily: 'Poppins', 
  },
  box: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#bcbcbc",
    borderTopWidth: 1
  }
});

export default MoreOptions;
