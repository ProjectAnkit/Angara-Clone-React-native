import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PaymentPartners = () => {

  return (
    <View style={styles.container}>
          <View style={styles.box}>
              <Image source={{uri: "https://static.vecteezy.com/system/resources/previews/020/975/570/non_2x/visa-logo-visa-icon-transparent-free-png.png"}} style={styles.partner} />
              <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"}} style={styles.partner} />
              <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay.svg/2560px-RuPay.svg.png"}} style={styles.partner} />
              <Image source={{uri: "https://openheartcharitabletrust.in/wp-content/uploads/2022/10/3-1024x1024.png"}} style={styles.partner} />
              <Image source={{uri: "https://i.pinimg.com/originals/60/5a/bd/605abdb7af3405c6b20a426b1e128322.png"}} style={styles.partner} />
          </View>

          <View style={styles.box}>
              <Image source={{uri: "https://www.abhikant.in/wp-content/uploads/2023/03/UPI_logo_PNG_lyp5s5.png"}} style={styles.partner} />
              <Image source={{uri: "https://images.jifo.co/31463404_1556602679274.png"}} style={styles.partner} />
              <Image source={{uri: "https://static.vecteezy.com/system/resources/previews/019/909/583/non_2x/paytm-transparent-paytm-free-free-png.png"}} style={styles.partner} /> 
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  partner: {
    width: 60,
    height: 60,
    marginHorizontal: 10,
    margin: 5,
    resizeMode: 'contain',
  },
});

export default PaymentPartners;
