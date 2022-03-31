import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat, Send } from "react-native-gifted-chat";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const msg = [
  {
    _id: "8abbc4757",
    text: "Doing Good",
    createdAt: new Date().setHours(20),
    user: {
      _id: 1,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: "8abbc44854",
    text: "Hey How are you doing man",
    createdAt: new Date().setDate(25),
    user: {
      _id: 2,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: "8abbc44855",
    text: "Chat",
    createdAt: new Date().setHours(14),
    user: {
      _id: 1,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: "abbc44857",
    text: "Hey How are you doing man",
    createdAt: new Date().setHours(20),
    user: {
      _id: 2,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: "8bb8c44857",
    text: "Hey How are you doing man",
    createdAt: new Date().setHours(20),
    user: {
      _id: 2,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: "8ab44857",
    text: "Hey How are you doing man",
    createdAt: new Date().setHours(20),
    user: {
      _id: 2,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: "8bbc44857",
    text: "Hey How are you doing man",
    createdAt: new Date().setHours(20),
    user: {
      _id: 2,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: "8abc44857",
    text: "Hey How are you doing man",
    createdAt: new Date().setHours(20),
    user: {
      _id: 2,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: "8abbc4457",
    text: "Hey How are you doing man",
    createdAt: new Date().setHours(20),
    user: {
      _id: 2,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
];

export default function ChatScreen() {
  // fetch messages using database

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(msg);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => {
        onSend(messages);
        console.log("====================================");
        console.log(messages);
        console.log("====================================");
      }}
      user={{
        _id: 1,
      }}
      alwaysShowSend={true}
      showUserAvatar={false}
      renderAvatar={null}
      renderSend={(props) => (
        <Send {...props}>
          <View
            style={{
              margin: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons name="send" size={25} color="blue" />
          </View>
        </Send>
      )}
    />
  );
}
