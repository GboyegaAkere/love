import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';


const CommentsSection = () => {
  const comments = [
    { id: 1, user: '田中', comment: '興味深い考察ですね！' },
    { id: 2, user: '伊藤', comment: '勉強になります！' },
    { id: 3, user: '鈴木', comment: '興味深い視点です！' },
    { id: 4, user: '加藤', comment: '新しい知識が得られました！' },
    { id: 5, user: '山田', comment: '勉強になります！' },
    // More comments...
  ];

  return (
    <ScrollView  className="bg-pink-200">

    
    <View className='flex-1'>
      <View className='p-4'>
        <Text className='text-lg font-bold mb-4'>コメント</Text>

        {/* List of comments */}
        {comments.map((comment) => (
          <View key={comment.id} className='mb-4'>
            <Text className='font-semibold'>{comment.user}</Text>
            <Text>{comment.comment}</Text>
          </View>
        ))}

        {/* Comment input */}
        <View className='flex-row items-center mb-4'>
          <TextInput
            className='flex-1 p-2 border rounded border-gray-400'
            placeholder="Add a comment..."
            // Handle input changes here
          />
          <TouchableOpacity className='ml-2 bg-blue-500 rounded p-2'>
            <Text className='text-white'>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default CommentsSection;
