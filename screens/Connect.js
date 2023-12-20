import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Menu from './Menu'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewsScreen from './NewsScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
import Head from '../components/Head';



const Connect = () => {
  return (
    <>
    <Head/>
     <ScrollView>
      <View className="w-[300px] h-[27s0px] rounded-lg bg-white mx-auto mt-10">
        <View className="flex flex-row justify-center pt-5 items-center gap-1">
            <AntDesign name="videocamera" size={34} color="black" />
            <Text>始まる</Text>
        </View>
        <View className="mx-auto">
         <NewsScreen/>
        </View>
      </View>

      <View className="w-[300px] h-[100px] rounded-lg bg-white mx-auto mt-10">
        <View className="flex flex-row justify-center pt-2 items-center gap-1">
            <FontAwesome name="comment-o" size={34} color="black" />
            <Text>コメント</Text>
        </View>
      </View>
       
       <View className="flex flex-row items-center justify-center gap-2 mt-5 p-2 ">
            <TouchableOpacity className="w-[160px] h-[100px] rounded-lg bg-black mt-10">
                <Text className="text-white">ライブストリーミングはこちら</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[160px] h-[100px] rounded-lg bg-black mt-10">
             <Text className="w-[160px] h-[50px] text-white">Bluetooth</Text>
             <Text className="text-white">が接続中です b</Text>
            </TouchableOpacity>
       </View>
     </ScrollView>
    </>
  )
}

export default Connect