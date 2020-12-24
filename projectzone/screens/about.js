import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>About application</Text>
      <Text>This application was founded to help me in saving photos with some descriptions. 
            So you can use MyApplication for making some photo notes.
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  title:{
    fontWeight: "bold",
  },
});