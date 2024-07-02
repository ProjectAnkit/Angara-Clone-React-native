import React from 'react';
import { View, Text, StyleSheet ,FlatList, Image} from 'react-native';
import InsiderViewData from '../InsiderViewData.json'
import { useFonts } from 'expo-font';

const InsiderView = () => {

  const [isLoaded] = useFonts({
    "Poppins": require("./../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!isLoaded) {
    return <></>
  }

    const InsiderBox = ({ title, image}) => (
          <View style={styles.box}>
            <Image source={{uri: image}} style={styles.image}/>
            <Text numberOfLines={2} style={styles.title}>{title}</Text>
          </View>
      );


  return (
    <View style={styles.container}>
       <FlatList
        data={InsiderViewData}
        scrollEnabled={false}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <InsiderBox {...item} />}
        ListHeaderComponent={<Text style={styles.text}>An Insider View</Text>}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
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
  box: {
    height: 200,
    width: "50%",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderWidth: 0.5,
    backgroundColor: "#f3f6f4",
    borderColor: "#bcbcbc",
  },
  title:{
    fontSize: 16,
    fontWeight: "400",
    alignSelf: "center",
    fontFamily: 'Poppins', 
  },
  text: {
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 30,
    fontFamily: 'Poppins', 
  },
  image:{
    height: 100,
    width: 100,
    marginBottom: 20,
    alignSelf: "center"
  }
});

export default InsiderView;
