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
} from 'react-native';
// import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import sendButton from '../send.png';

export const Typebar = ({ onSend, ...props }) => {
  const [input, setInput] = useState('');
  const [showButton, setShowButton] = useState(false);
  const slideIn = new Animated.Value(0);
  const [numLines, setNumLines] = useState(1);
  const textInputRef = useRef(null);

  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (input) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [input]);

  const handleLayout = (event) => {
    let { height } = event.nativeEvent.layout;
    console.log('numlines', height / 30);
    setNumLines(height / 30);
  };

  const animatedStyle = {
    opacity: animation,
  };

  return (
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          borderTopWidth: 0.3,
          borderTopColor: 'black',
        }}>
        <View style={{ flex: 1, flexDirection: 'row' }} onLayout={handleLayout}>
          <AutoGrowingTextInput
            ref={textInputRef}
            value={input}
            minHeight={20}
            maxHeight={200}
            enablesReturnKeyAutomatically
            returnKeyType="return"
            placeholder="Ask me anything."
            placeholderTextColor="#bcbcbc"
            keyboardAppearance='dark'
            style={{
              ...styles.input,
              borderRadius: numLines < 2 ? 50 : 20,
              paddingTop: numLines < 2 ? 8 : 10,
            }}
            onChangeText={(text) => {
              setInput(text);
            }}
            multiline={true}
            numberOfLines={0}
            {...props}
          />
        </View>
        {input ? (
          <TouchableOpacity
            title="Submit"
            color="#FFA500"
            onPress={() => {
              // onSend(input)
              setInput('');
            }}
            style={[
              {
                alignSelf: 'center',
                borderRadius: '50%',
                width: 45,
                height: 45,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 10,
                backgroundColor: '#dd8500',
              },
              animatedStyle,
            ]}>
            <Image
              source={sendButton}
              style={{ width: 18, height: 18, marginLeft: 2 }}
            />
          </TouchableOpacity>
        ) : null}
      </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#333',
    color: '#fff',
    fontSize: 18,
    lineHeight: 24,
    padding: 10,
    flex: 1,
  },
  button: {
    backgroundColor: '#FFA500',
    color: '#FFA500',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#ffffff',
  },
});
