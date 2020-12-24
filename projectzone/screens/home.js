import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import ReviewForm from './reviewForm';
import Icon from 'react-native-vector-icons/FontAwesome';
import { setLightEstimationEnabled } from 'expo/build/AR';

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { picture: 1, title: 'Test title 1', rating: 5, body: 'Some text 1', key: '1' },
    { picture: 2, title: 'Test title 2', rating: 4, body: 'Some text 2', key: '2' },
    { picture: 3, title: 'Test title 3', rating: 3, body: 'Some text 3', key: '3' },
    { picture: 4, title: 'Test title 4', rating: 2, body: 'Some text 4', key: '4' },
    { picture: 5, title: 'Test title 5', rating: 1, body: 'Some text 5', key: '5' },
  ]);


  const deleteItem = (key) => {
    setReviews(prevReviews => {
      return prevReviews.filter(item=>item.key != key);
    });
  }

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />

          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList 
      data={reviews} 
      deleteItem ={deleteItem}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{item.title}</Text>
            <View style={styles.iconStyle}>
              <Icon name="trash" size={25} color="#a81b32" onPress={() => deleteItem(item.key)}/>
            </View>
          </Card>
        </TouchableOpacity>
      )} />

    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
  iconStyle:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});