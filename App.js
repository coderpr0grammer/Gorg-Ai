import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
// import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { MessageBubble } from './components/MessageBubble';
import { Typebar } from './components/Typebar';
import Spacer from './components/Spacer';
import { Chat } from './components/Chat';
const sendButton = require('./send.png');

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });
const [focused, setFocused] = useState(0);

  const sendMessage = (newMessages) => {
    console.log('hi')
    setMessages(GiftedChat.append(messages, newMessages));
  };

  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#36393E' }}>
        <SafeAreaView
          style={[
            styles.container,
            {
              backgroundColor: '#36393E',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            },
          ]}>
            <Chat />
            <KeyboardAvoidingView behavior="position" style={{marginTop: focused == 1 ? -60 : -20}}>
            <Typebar onFocus={() => setFocused(1)} onBlur={() => setFocused(0)} />
            </KeyboardAvoidingView>
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    color: '#fff',
    justifyContent: 'center',
  },
  title: {
    color: '#FFA500',
    fontSize: 36,
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
    alignSelf: 'center',
  },
});
