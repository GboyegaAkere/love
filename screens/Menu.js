import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline' 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import WelcomeScreen from './WelcomeScreen';
import { Entypo } from '@expo/vector-icons';


const Menu = () => {
  const navigation = useNavigation()
  // const handleIconPress = (iconName) => {
  //   // Handle icon press logic here
  //   console.log(`Pressed ${iconName} icon`);
  //   // Perform different actions based on which icon is pressed
  // };

  return (
    <View className=' justify-center items-center '>
      <View className ='w-full bg-black border-gray-300 shadow-xl border-t p-4 flex-row justify-around absolute bottom-0'>
        <TouchableOpacity onPress={() => navigation.navigate('Connect')} className="items-center">
         <AntDesign name="home" size={36} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Bluetooth')}  className="items-center">
         <MaterialCommunityIcons name="bluetooth" size={36} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('N')}  className="items-center">
         <Entypo name="news" size={36} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

