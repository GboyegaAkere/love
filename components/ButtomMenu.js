import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';



const ButtomMenu = () => {  
      return (
        <View style={tw('flex-1 justify-center items-center')}>
          {/* Your other content here */}
    
          {/* Bottom navigation */}
          <View className="w-full bg-gray-200 p-4 flex-row justify-around absolute bottom-0">
            <TouchableOpacity onPress={() => handleIconPress('Icon 1')} style={tw('items-center')}>
              <Text style={tw('text-xl')}>Icon 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleIconPress('Icon 2')} style={tw('items-center')}>
              <Text style={tw('text-xl')}>Icon 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleIconPress('Icon 3')} style={tw('items-center')}>
              <Text style={tw('text-xl')}>Icon 3</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };

export default ButtomMenu
