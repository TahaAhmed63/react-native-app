import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "./GlobalStyles";
import ChatListScreen from "./ChatListScreen";

const Main = () => {
  return (
    <View style={styles.main}>
      <View style={styles.sidebar}>
        {/* <Image
          style={styles.settingsIcon}
          contentFit="cover"
          source={require("./assets/settings.png")}
        /> */}
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>CAMERA</Text>
        </View>
        <View style={[styles.buttonWrapper, styles.statusButton]}>
          <Text style={styles.buttonText}>STATUS</Text>
        </View>
        <View style={[styles.buttonWrapper, styles.chatsButton]}>
          <Text style={styles.buttonText}>CHATS</Text>
        </View>
      </View>
      <ChatListScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "row", // Align the sidebar and chat screen horizontally
    backgroundColor: Color.colorWhite,
  },
  sidebar: {
    width: 50, // Narrow sidebar width
    backgroundColor: Color.colorSlateblue,
    height:'100%',
    top:30,
    
    alignItems: "center", // Center items horizontally
    paddingTop: 50, // Top padding for spacing
  },
  settingsIcon: {
    width: 100,
    height: 60,
    left:30,
zIndex:999,
    marginBottom: 30, // Margin for spacing
    borderRadius: 30,
    backgroundColor: "#3f51b4",
  },
  buttonWrapper: {
    width: "100%",
    height: 80, // Height adjusted for better fitting
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.colorSlateblue,
  },
  statusButton: {
    marginTop: 150,
  },
  chatsButton: {
    marginTop: 200,
  },
  buttonText: {
    transform: [{ rotate: "-90deg" }],
    textAlign: "center",
    color: '#fff',
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
});
export default Main;
