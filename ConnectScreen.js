import * as React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "./GlobalStyles";

const ConnectScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <View style={[styles.background, styles.backgroundPosition]} />

 

      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.imageTouchable}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("./assets/images/left_arrow.svg")}
        />
      </TouchableOpacity>
      <View style={[styles.phoneBar, styles.gobackwrap]}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} >

      <Text style={[styles.letsConnect, styles.phoneNumberTypo]}>
        Let’s Connect
      </Text>
     </TouchableOpacity>
      </View>
      <View style={[styles.phoneBar, styles.phoneLayout]}>
        <View style={[styles.phoneBarChild, styles.phoneLayout]} />
        <TextInput
          keyboardType="numeric"
          style={[styles.phoneNumber, styles.phoneNumberTypo]}
          placeholder="Phone Number"
          placeholderTextColor={Color.colorSlateblue}
          maxLength={11}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("./assets/images/phone.svg")}
        />
      </View>
  
      <Text style={[styles.weWillShare, styles.phoneNumberTypo1]}>
        We will share you sms with confirmation code.
      </Text>
      <View style={[styles.button, styles.buttonLayout]}>
        <TouchableOpacity
          style={styles.buttonChild}
          onPress={() => navigation.navigate('ChatListScreen')}
        >
          <Text style={[styles.continue, styles.continueFlexBox]}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    height: "100%",
    // justifyContent: "center",
    // alignItems: "center",
  },
  backgroundPosition: {
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  gobackwrap:{
position:'absolute',
top:0,
left:0,
  },
  buttonLayout: {
    height: 42,
    display:'flex',
    justifyContent:'center',
    width: "100%",
    position: "relative",
  },
  continueFlexBox: {
    textAlign: "center",
    position: "relative",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  phoneLayout: {
    height: 71,
    width: "97%",
  },
  phoneNumberTypo: {
    color: Color.colorSlateblue,
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    position:'relative',
    // position: "absolute",
    placeholderTextColor: Color.colorSlateblue,
  },
  phoneNumberTypo1: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  background: {

    backgroundColor: Color.colorWhite,

  },
  buttonChild: {
    borderRadius: 22,
    backgroundColor: Color.colorSlateblue,
    justifyContent: "center",
    alignItems: "center",
    textAlign:'center',
    height: 42,
    width: "100%",
  },
  continue: {
    fontSize: 20,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
  },
  button: {
    top: "80%",
    left: "0%",
    width:"100%",
    display:"flex",
    justifyContent:"center"
  },
  vectorIcon: {
    width: 24,
    height: 24,
  },
  phoneBarChild: {
    borderRadius: 10,
    borderStyle: "solid",
    position:'absolute',
    borderColor: "#000",
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 40,
    right:0,
    width:"20%",
  },
  phoneNumber: {
    top: 55,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  vectorIcon1: {
    height: "46.48%",
    width: "6.43%",
    top: "79.76%",
    right: "88.07%",
    bottom: "26.76%",
    left: "5.5%",
  },
  phoneBar: {
    top: 80,
    left: "3%",
  },
  letsConnect: {
    top: 55,
    left: 115,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  weWillShare: {
    top: 130,
    fontSize: 10,
    color: "#d50000",
    textAlign: "center",
  },
  imageTouchable: {
    position: "absolute",
    top: "8%",
    left: "6%",
  },
});

export default ConnectScreen;
