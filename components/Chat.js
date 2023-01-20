import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  TextInput,
  Animated,
  FlatList,
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Gorg from '../gorg-square.png';
import { Typebar } from './Typebar';
import sendButton from '../send.png';

const exampleMessages = [
  {
    _id: 1,
    text: 'Hello, how are you?',
    createdAt: new Date(),
    user: {
      _id: 5,
      name: 'React Native',
      avatar: Gorg,
    },
  },
  {
    _id: 2,
    text: "I'm good, thanks for asking.",
    createdAt: new Date(),
    user: {
      _id: 5,
      name: 'User',
      avatar: 'https://placeimg.com/140/140/any',
    },
  },
  {
    _id: 3,
    text: 'What have you been up to today?',
    createdAt: new Date(),
    user: {
      _id: 5,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
  },
];

export const Chat = (...props) => {
  const [messages, setMessages] = useState(exampleMessages);

  const onSend = (newMessages) => {
    console.log('hi')
    setMessages(GiftedChat.append(messages, newMessages));
  };

  const renderAvatar = (props) => {
    return (
      <Image
        style={{
          
          width: 45,
          height: 45,
          borderRadius: 15,
          marginRight: 10,
        }}
        source={Gorg}
      />
    );
  };

  const renderInputToolbar = (props) => {
    return (
      null
    );
  };

  return (
      <GiftedChat
        style={{
          backgroundColor: 'red',
        }}
        onSend={onSend}
        user={{ _id: 1 }}
        messages={messages}
        renderAvatar={renderAvatar}
        renderInputToolbar={renderInputToolbar}
      />
  );
};
