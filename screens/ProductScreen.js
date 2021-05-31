import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Product Screen</Text>
      {/* <Button
        title="Click Here"
        onPress={() => alert('Button Clicked!')}
      /> */}
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});