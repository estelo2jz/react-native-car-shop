import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import theme from '../assets/themes/index';
import cars from '../assets/data/cars';
import Card from './Card';
import Separator from './Separator.js';

const ProductScreen = ({ navigation, navigation: { setOptions } }) => {
  return (
    <View style={styles.container}>
      <Text>Product Screen</Text>

      <ScrollView>
        <View style={styles.albumContainer}>
          {cars.map((item, index) =>
            <View key={index}>
              <Card item={item} navigation={navigation} />

              {/* add separator if the index is 1 */}
              {index === 1 && <Separator />}
            </View>

          )}
        </View>
      </ScrollView>

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