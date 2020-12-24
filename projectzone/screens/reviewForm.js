import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, TextInput, View, Text, Platform, Image } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button.js';
import * as ImagePicker from 'expo-image-picker';



const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {



  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };




  return (

    <View style={globalStyles.container}>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>

      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {props => (
          <View>


            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              onBlur={props.handleBlur('title')}
              value={props.values.title}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

            <TextInput
              style={globalStyles.input}
              multiline minHeight={60}
              placeholder='Review details'
              onChangeText={props.handleChange('body')}
              onBlur={props.handleBlur('body')}
              value={props.values.body}
            />
            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

            <TextInput
              style={globalStyles.input}
              placeholder='Rating (1 - 5)'
              onChangeText={props.handleChange('rating')}
              onBlur={props.handleBlur('rating')}
              value={props.values.rating}
              keyboardType='numeric'
            />
            <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

            <FlatButton onPress={props.handleSubmit} text='submit' />
          </View>
        )}
      </Formik>
    </View>

  );
}