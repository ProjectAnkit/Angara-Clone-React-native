import React from 'react'
import {Text, View ,FlatList ,StyleSheet, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Gems from '../Gems.json'
import JewelleryCategory from '../Components/JewelleryTypeBox'
import SearchBox from '../Components/SearchBox'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import FeaturedLogo from '../Components/FeaturedLogo'
import RatnaType from '../Components/RatnaType'
import Banner2 from '../Components/Banner2'
import Category from '../Components/Category'
import PartnersLogo from '../Components/PartnersLogo'
import InsiderView from '../Components/InsiderView'
import MoreOptions from '../Components/MoreOptions'
import SignupSection from '../Components/SignupSection'
import SocialLinks from '../Components/SocialLinks'
import PaymentPartners from '../Components/PaymentPartners'
import Footer from '../Components/Footer'

const HomeScreen = () => {
    return(
        <ScrollView>
            <SafeAreaView style={styles.container}>
            <View>
                <Header/>
            </View>
            
            <View style={styles.search}>
                <SearchBox/>
            </View>

            <View style={styles.JewelleryCategory}>
                <JewelleryCategory/>
            </View>

            <View style={styles.Banner}>
                <Banner/>
            </View>

            <View style={styles.FeatureLogo}>
                 <FeaturedLogo/>
            </View>

            <View style={styles.RatnaType}>
                 <RatnaType/>
            </View>

            <View style={styles.Banner2}>
                <Banner2/>
            </View>

            <View style={styles.category}>
               <Category/>
            </View>

            <View style={styles.partnerlogo}>
                <PartnersLogo/>
            </View>

            <View style={styles.InsiderView}>
                <InsiderView/>
            </View>

            <View style={styles.MoreOptions}>
                <MoreOptions/>
            </View>

            <View style={styles.SignupSection}>
               <SignupSection/>
            </View>
            
            <View style={styles.SocialLinks}>
                <SocialLinks/>
            </View>

            <View>
                <PaymentPartners/>
            </View>

            <View>
                <Footer/>
            </View>

        </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search:{
        paddingHorizontal: 15,
    },
    JewelleryCategory:{
        alignSelf: "center",
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    Banner:{
        marginBottom: 20,
    },
    FeatureLogo: {
        marginBottom: 20,
    },
    RatnaType:{
        marginBottom: 20,
    },
    Banner2:{
        paddingHorizontal: 15,
        marginBottom: 30,
    },
    category:{
        marginBottom: 35,
    },
    partnerlogo:{
        marginBottom: 30,
    },
    InsiderView:{
        marginBottom: 20,
    },
    MoreOptions: {
        marginBottom: 40,
    },
    SignupSection:{
        marginBottom: 15,
    },
    SocialLinks:{
        marginBottom: 20,
    },

})

export default HomeScreen