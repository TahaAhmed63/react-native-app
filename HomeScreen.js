import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import Images from './Images';

// Define the HomeScreen component without TypeScript annotations
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoPlaceholder} />
      <Image source={Images.logo} style={styles.logo} />

      <Text style={styles.title}>Smile Starts Here</Text>

      <View style={styles.buttonContainer}>
        {['Fast', 'Powerful', 'Secure', 'Private', 'Unlimited', 'Synced', 'Reliable'].map((text) => (
          <TouchableOpacity key={text} style={styles.featureButton}>
            <Text style={styles.featureText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <Text style={styles.subtitle}>Let's Talk Tech</Text>
      
      <TouchableOpacity 
        style={styles.startButton}
        onPress={() => navigation.navigate('ConnectScreen')}
      >
        <Text style={styles.startButtonText}>Start Messaging</Text>
      </TouchableOpacity>
      
      <Text style={styles.footerText}>Developed by Tag</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 35,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoPlaceholder: {
    width: 200,
    height: 0,
    borderRadius: 50,
    maxWidth: '100%',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logoImage: {
    width: '100%', 
    height: 'auto',
    borderRadius: 50,
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 0,
    color: '#27326b',
  },
  subtitle: {
    fontSize: 32,
    marginBottom: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#27326b',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    marginLeft: '5%',
    justifyContent: 'flex-start',
  },
  featureButton: {
    backgroundColor: 'transparent',
    padding: 10,
    margin: 5,
    width: '25%',
    borderWidth: 1,
    borderColor: '#3f51b5',
    borderRadius: 5,
  },
  featureText: {
    fontSize: 14,
  },
  startButton: {
    backgroundColor: '#3f51b5',
    padding: 5,
    width: '80%',
    borderRadius: 50,
    textAlign: 'center',
    marginTop: 10,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  footerText: {
    fontSize: 12,
    color: '#3f51b5',
    marginTop: -10,
  },
});

export default HomeScreen;
