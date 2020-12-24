import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images, pictures } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {
  const rating = navigation.getParam('rating');
  const picture = navigation.getParam('picture');

  return (
    <View style={globalStyles.container}>
      <Card>
        <View>
          <Image source={images.pictures[picture]} />
          <Text style={globalStyles.titleText}>
            {navigation.getParam('title')}
          </Text>
        </View>

        <Text>{navigation.getParam('body')}</Text>
        <View style={styles.rating}>
          <Text>Photo rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});