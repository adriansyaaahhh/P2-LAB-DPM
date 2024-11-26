import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CombinedLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Teks di Tengah Layar</Text>
      <View style={styles.boxesContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#d3d3d3', 
  },
  text: {
    fontSize: 24, 
    color: 'blue',
    fontWeight: 'bold', 
    marginBottom: 30, 
  },
  boxesContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    width: '100%', 
  },
  box1: {
    width: 100, 
    height: 100, 
    backgroundColor: 'yellow', 
  },
  box2: {
    width: 100, 
    height: 100, 
    backgroundColor: 'aqua', 
  },
});

export default CombinedLayout;
