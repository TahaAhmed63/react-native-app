import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // For React Native CLI

// Define the chat data
const DATA = [
  { id: '1', name: 'Profile Name', message: 'Hi This is message', lastSeen: 'Last Seen' },
  { id: '2', name: 'Profile Name', message: 'Hi This is message', lastSeen: 'Last Seen' },
  // Add more chat items similarly
];

export default function ChatListScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <View  >
                <Ionicons name="person-circle" size={60} color="#fff" style={[styles.profileIcon]} />

        </View>
      <View style={styles.itemTextContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.lastSeen}>{item.lastSeen}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Let's Talk Tech</Text>
        <View style={styles.avatar} >
                <Ionicons name="person-circle-outline" size={60} color="#fff" style={styles.profileIcon} />

        </View>
        </View>
        <Text style={styles.headerSubtitle}>never ending chats...</Text>
     
   
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.fab2}>
      <Ionicons
            name={ 'settings-outline'}
            size={24}
            color="#fff"
          />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top:20,
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
  
    alignContent:'center',
marginLeft:40,
    display:'flex',
    gap:70,
    flexDirection:'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#27326b',
    fontSize: 17,
    textAlign:'end',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#109ACD',
    fontSize: 16,
    paddingBottom:0,
    fontWeight: 'bold',
    marginTop:-40,
   textAlign:'center',
  },
  profileIcon:{
    width: '53',
    height: 'auto',
    borderRadius: 50,
    right:0,
color:'#ff',
 backgroundColor: '#007BFF',

    marginRight: 10,
    }
      // avatar: {
  //   width: 50,
  //   height: 50,
  //   borderRadius: 50,

  //   backgroundColor: '#007BFF',
  //   marginRight: 10,
  // },
  ,item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    alignItems: 'center',
  },
  itemTextContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    color: '#000',
  },
  message: {
    fontSize: 16,
    color: '#888',
  },
  lastSeen: {
    fontSize: 14,
    color: '#888',
  },
  fab: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    width: 56,
    height: 56,
    backgroundColor: '#3f51b4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabIcon: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  fab2: {
    position: 'absolute',
    right: 25,
    // bottom: 50,
    top:10,
    width: 76,
    left:-30,
    height: 76,
    backgroundColor: '#3f51b4',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
