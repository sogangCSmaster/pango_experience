import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GoogleSearchView from './pages/GoogleSearchView';
import Home from './pages/Home';

const { width, height} = Dimensions.get('window');


function HomeScreen({ navigation }) {
  return (
    <Home navigation={navigation}/>
  );
}

function GoogleSearch() {
  return (
    <GoogleSearchView />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '채널 선택' }}/>
        <Stack.Screen name="GoogleSearch" component={GoogleSearch} options={{ title: '구글 검색 광고 세팅' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;