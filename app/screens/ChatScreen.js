import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat, Send } from "react-native-gifted-chat";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import useAuth from "../auth/useAuth";
import chatsApi from "../apis/chats";

export default function ChatScreen({ route }) {
  // fetch messages using database
  const sessionid = route?.params?.sessionid;
  const { user } = useAuth();
  const focus = useIsFocused();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleAddChat = (chats) => {
    chatsApi
      .addChat(sessionid, chats)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {});
  };
  useEffect(() => {
    if (!focus) return null;
    setLoading(true);
    setMessages([]);
    chatsApi
      .getChats(sessionid)
      .then((res) => {
        setMessages(res?.data?.data[0]?.chats);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [focus]);

  const onSend = useCallback((messages = []) => {
    handleAddChat(messages);
    console.log(messages);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <View
      style={{
        flex: 1,
        margin: 10,
        justifyContent: "center",
      }}
    >
      {!loading && (
        <GiftedChat
          messages={messages}
          onSend={(messages) => {
            onSend(messages);
          }}
          user={{
            _id: user._id,
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
      )}

      {messages.length == 0 && loading && (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );
}
