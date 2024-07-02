import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity,Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const Category = () => {

    const [isLoaded] = useFonts({
        "Poppins": require("./../../assets/fonts/Poppins-Regular.ttf"),
      });
  
    if(!isLoaded){
        return <></>
    }

    const RingCategory = [
        {title: "Princess Diana Inspired Blue Sapphire Ring with silver carving on it", price: "₹909 - ₹148,149", image: "https://jewelryartisans.com/cdn/shop/products/CA0515EK-W-1.00_ac77b689-e14f-4262-9298-8f78f257fffd_1024x.png?v=1571720954"},
        {title: "Round Opal Cathedral Ring with Diamond Halo", price: "₹649 - ₹1809", image: "https://tdfjewellery.com/wp-content/uploads/2021/10/Emerald.png"},
        {title: "Solitaire Round Diamond Infinity Promise Ring", price: "₹169 - ₹159,179", image: "https://www.khwaahish.com/wp-content/uploads/2022/08/Synchronized-Stunner-Diamond-Ring-RG1971A-View-02.png"},
        {title: "Emerald and Diamond Three Stone Ring", price: "₹1319 - ₹142,359", image: "https://mlp3bil5khwp.i.optimole.com/cb:Llu7.33552/w:auto/h:auto/q:mauto/f:best/ig:avif/id:d139754441c655b9ef683eb2f7332d9c/https://oncheong.com/clustered-blue-sapphire-ring-on-cheong.png"},
        {title: "Cushion Ruby and Half Moon Diamond Halo Ring", price: "₹3,239 - ₹78,149", image: "https://www.fionadiamonds.com/cdn/shop/products/FRGS0232-R1_0ca7c1bd-2a0e-4f74-800a-108aaaaafd70_1445x.png?v=1654862420"},
        {title: "Oval Yellow Sapphire Trillium Floral Shank Ring", price: "₹939 - ₹3,649", image: "https://emcgtdx36wv.exactdn.com/wp-content/uploads/2022/08/0.40-Ct-Quadratical-Aureole-Solitaire-Diamond-Engagement-Ring-RG1374A-View-01.png?lossy=0&webp=90&avif=90&ssl=1"},
    ]

    const RingContainer = ({title, price,image}) => {
        return (
            <View style={styles.RContainer}>
                <Image source={{uri: image}} style={{flex: 2}}/>
                <View style={styles.description}>
                   <Text style={styles.Rtitle} numberOfLines={2}>{title}</Text>
                   <Text style={styles.Rprice}>{price}</Text>
                </View>
            </View>
        )
    }


    const CatContainer = ({ Icon, title }) => {
        return (
            <View style={styles.container}>
                {Icon}
                <Text style={styles.text}>{title}</Text>
            </View>
        )
    }

    const category = [
        { title: "Rings", Icon: <MaterialCommunityIcons name="ring" size={24} color="black" /> },
        { title: "Pendants", Icon: <MaterialCommunityIcons name="necklace" size={24} color="black" /> },
        { title: "Bracelets", Icon: <FontAwesome name="circle-o-notch" size={24} color="black" /> }
    ]

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.CategoryHeader}>Find Your Favourite</Text>
            <FlatList
                data={category}
                keyExtractor={(item) => item.title.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <CatContainer {...item} />}
                horizontal={true}
            />

            <FlatList
                data={RingCategory}
                keyExtractor={(item)=> item.title.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({item})=> <RingContainer {...item}/>}
            />
            <TouchableOpacity>
                <View style={styles.viewtext}>
                    <Text style={{fontSize: 16,paddingRight: 4}}>View All</Text>
                    <AntDesign name="down" size={20} color="black" />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    viewtext:{
        flexDirection: "row",
        alignSelf: "center",
    },
    CategoryHeader:{
        marginTop: 10,
        fontSize: 18,
        paddingLeft: 10,
        marginBottom: 10,
        fontFamily: "Poppins",
    },
    mainContainer: {
        paddingHorizontal: 15,
        marginBottom: 10,
        flex: 1,
    },
    container: {
        backgroundColor: "#e7e7e7",
        height: 35,
        width: "auto",
        padding: 3,
        borderRadius: 5,
        paddingHorizontal: 6,
        flexDirection: "row",
        margin: 10,
    },
    text: {
        fontSize: 18,
        marginHorizontal: 10,
        fontFamily: "Poppins",
    },
    RContainer:{
        height: 350,
        width: 220,
        margin: 10,
        borderWidth: 1,
        flexDirection: "column",
        borderColor: "#bcbcbc",
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: "flex-end",
    },
    description: {
        padding: 10,
    },
    Rtitle:{
        fontSize: 14,
        color: "#999999",
        marginBottom: 5,
        fontFamily: "Poppins",
    },
    Rprice:{
        fontSize: 17,
        fontFamily: "Poppins",
    }
})

export default Category;
