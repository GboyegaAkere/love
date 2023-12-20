import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline' 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import WelcomeScreen from './WelcomeScreen';
import Menu from './Menu';


const HomeScreen = () => {
  const navigation = useNavigation()
 

  return (
    <View className='flex-1 justify-center items-center bg-black'>
      <WelcomeScreen/>
      <Menu/>
    </View>
  );
};

export default HomeScreen;

