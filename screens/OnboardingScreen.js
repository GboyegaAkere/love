import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
// import LottieView from 'lottie-react-native';

import { useNavigation } from '@react-navigation/native';


const OnBoarding = () => {
  const navigation = useNavigation()
  return (
       <View className="flex-1">
        <Onboarding
             containerStyles={{paddingHorizontal:15}}
              onSkip={()=> navigation.navigate("Login")}
              onDone={()=> navigation.navigate("Login")}
                pages={[

                  {
                    backgroundColor:'#FFFFFF',
                    image: <Image   source={require("../assets/images/sex2.png")} />,
                    title: '安全な探査',
                    subtitle:'あなたの安全は重要です。 安全で楽しい体験を保証するために、セキュリティ機能とガイドラインを確認してください',
                  },
                  
                {
                  backgroundColor: '#000000',
                  image: <Image   source={require("../assets/images/sex3.png")} className="rounded-full w-[300px] h-[300px]"  />,
                  title: 'ラブケアへようこそ',
                  subtitle: '安全な環境でアダルト コンテンツを探索します。 簡単なチュートリアルから始めましょう。',
                },

                {
                  backgroundColor: '#1B1B1B',
                  image: <Image   source={require("../assets/images/sex1.jpg")} className="rounded-full" />,
                  title: '発見して接続する',
                  subtitle: '多様なプロフィールを探索し、情熱や好みを共有する人々とつながりましょう',
                },

               
              ]}
          />
       </View>
          
  )
}

export default OnBoarding