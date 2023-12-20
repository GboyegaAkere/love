import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Menu from './Menu';


const BluetoothScreen = () => {
  const handleStart = () => {
    // Code to handle starting Bluetooth connection
    console.log('Start Bluetooth connection');
  };

  const handleIncrease = () => {
    // Code to handle increasing Bluetooth connection
    console.log('Increase Bluetooth connection');
  };

  const handleStop = () => {
    // Code to handle stopping Bluetooth connection
    console.log('Stop Bluetooth connection');
  };

  const handleReduce = () => {
    // Code to handle reducing Bluetooth connection
    console.log('Reduce Bluetooth connection');
  };

  return (
    <>
    <View className='flex-1 justify-center items-center bg-gray-100'>
    <Text className='text-2xl font-bold mb-6 text-gray-800'>
    デバイスが接続されました
    </Text>

    <View className='flex-col w-4/5'>
      <TouchableOpacity
        className='bg-blue-500 py-4 px-8 rounded mb-4 shadow-md shadow-pink flex-row items-center'
        onPress={handleStart}
      >
        <Entypo name="controller-jump-to-start" size={34} color="black" />
        <Text className='text-white font-bold'>始める</Text>
      </TouchableOpacity>

      <View className='flex-row justify-between'>
        <TouchableOpacity
          className='bg-green-500 py-4 px-8 rounded w-1/2 mr-2 shadow-md shadow-pink flex-row items-center'
          onPress={handleIncrease}
        >
         <MaterialIcons name="format-indent-increase" size={34} color="black" />
          <Text className='text-white font-bold'>増加</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className=
            'bg-red-500 py-4 px-8 rounded w-1/2 ml-2 shadow-md shadow-pink flex-row items-center'
          onPress={handleStop}
        >
        <Feather name="stop-circle" size={34} color="black" />
          <Text className='text-white font-bold'>止める</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className='bg-yellow-500 py-4 px-8 rounded mt-4 shadow-md shadow-pink flex-row items-center'
        onPress={handleReduce}
      >
        <MaterialIcons name="format-indent-decrease" size={34} color="black" />
        <Text className='text-white font-bold'>引き下げる</Text>
      </TouchableOpacity>
    </View>
  </View>
  <Menu/>
  </>
  );
};

export default BluetoothScreen;

