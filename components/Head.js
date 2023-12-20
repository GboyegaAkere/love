import { View, Text, ScrollView, TouchableOpacity , SafeAreaView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';





const Head = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
       
       <View className="flex flex-row items-center justify-between px-10 gap-10 pt-3  bg-black pb-10">
        <TouchableOpacity  onPress={() => navigation.navigate('Connect')} className="flex flex-col items-center gap-1 rounded-full w-[60px]">
            <AntDesign name="home" size={34} color="white" />
            <Text className="text-white">家庭</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('N')} className="flex flex-col items-center gap-1">
            <Entypo name="news" size={34} color="white"/>
            <Text className="text-white">便り</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity className="flex flex-col gap-1 items-center">
            <Feather name="settings" size={34} color="white" />
            <Text className="text-white">設定</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate('Bluetooth')}  className="flex flex-col items-center gap-1">
            <MaterialCommunityIcons name="bluetooth" size={36} color="white" />
            <Text className="text-white">止める</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
   
  )
}

export default Head