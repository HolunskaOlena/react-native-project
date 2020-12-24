import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Schedule from '../screens/schedule';

const screens = {
    Schedule: {
    screen: Schedule,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='MyApplication' navigation={navigation} />
      }
    },
  },
}

const ScheduleStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default ScheduleStack;