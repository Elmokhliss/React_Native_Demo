import React, { useState }from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [old , oops]= useState ('oldd');
  return (
    <View style={styles.container}>
      <Text>{old}</Text>
      <Button title="Change" onPress={() => oops('pp')}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
