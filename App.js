import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/home/Home.js'
import List from './src/components/home/List.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Home/> */}
        <List/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    margin: 5
  },
});
