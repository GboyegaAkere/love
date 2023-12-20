import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text,Image } from 'react-native'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
 

const WelcomeScreen = () => {
  const ringPadding1 = useSharedValue(0)
  const ringPadding2 = useSharedValue(0)
  const navigation = useNavigation()

  React.useEffect (()=>{
    ringPadding1.value = 0
    ringPadding2.value = 0

    setTimeout(() => {
      ringPadding1.value = withSpring(ringPadding1.value+hp(5))
    },100);

    setTimeout(() => {
      ringPadding2.value = withSpring(ringPadding2.value+hp(5.5))  
    },300);

    setTimeout(() => {
      navigation.navigate("Connect")
    },2500);

  },[])

  
  return (
    <View className="flex-1 justify-center items-center space-y-10">
        <Animated.View className="rounded-full bg-gray-400" style={{padding:ringPadding1}}>
          <Animated.View className="rounded-full bg-gray-300" style={{padding:ringPadding2}}>
           <Image source={require("../assets/images/toy1.jpeg")} style={{width:hp(20), height:hp(20)}} className="rounded-full "/>
          </Animated.View>
        </Animated.View>
        <StatusBar style="light"/>
     
      {/* welcome message */}
      <View className="flex  items-center gap-2">
        <Text style={{fontSize:hp(7)}} className="font-bold text-white text-5xl tracking-widest">接続する</Text>
        <Text  style={{fontSize:hp(2)}}>デバイスに接続して楽しい時間を過ごしましょう</Text>
      </View>
    </View>
  )
}

export default WelcomeScreen
