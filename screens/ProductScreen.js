import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import theme from '../assets/themes/index';
import cars from '../assets/data/cars';
import Card from './Card';
import Separator from './Separator.js';
// import BottomSheet from 'reanimated-bottom-sheet';


const ProductScreen = ({ navigation, navigation: { setOptions } }) => {
  return (
    <View style={styles.container}>
      {/* <Text>Product Screen</Text> */}
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
      {/* <BottomSheet
        ref={sheetRef}
        snapPoints={[250, 0]}
        initialSnap={1}
        borderRadius={10}
        renderContent={renderBottomSheetContent}
      /> */}
      {/* <Button
        title="Click Here"
        onPress={() => alert('Button Clicked!')}
      /> */}
    </View>
  );
};

export default ProductScreen;


const styles = StyleSheet.create({
  albumContainer: {
    marginBottom: theme.spacing.l,
  },
  openSheetButton: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.primary,
    marginRight: theme.spacing.m,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
})