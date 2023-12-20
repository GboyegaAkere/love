import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function People() {

  
  // const url = 'https://live.fc2.com/api/getChannelComment.php'
  const [apis, setApis] = React.useState([])

  React.useEffect(()=>{
      getApi()
  },[])

  const getApi = () =>{
    const URL = 'https://live.fc2.com/contents/allchannellist.php'
    fetch(URL).then(res =>{
     return res.json()
    }).then(data =>{
      setApis(data)
      // console.log(data);
    })
  }

  

  const renderItem = ({ item }) => {
    return (
    <View className="mx-auto p-3">
         <View className="bg-white">
            {item.image ? (
            <Image
              source={{ uri:item.image }} 
              style={{ width: 200, height: 200 }} // Adjust dimensions as needed
            />
          ) : (
            <Image
              source={require("../assets/images/toy1.jpeg")}
              style={{ width: 100, height: 100 }} // Adjust dimensions as needed
            />
          )}
            <View>
                <Text className="text-xl">{item.name}</Text>
                <Text className="w-[190px]">{item.title}</Text>
                <Text>{item.start}</Text>
                <Text>{item.sex}</Text>
           </View>

        </View>
    </View>    
    );
  };

  return (
    <FlatList
    contentContainerStyle={{padding:2}}
      data={apis.channel}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};


