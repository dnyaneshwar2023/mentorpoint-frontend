import { StyleSheet, Text, View, Platform } from "react-native";
import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";
import Drawer from "./app/navigation/Drawer";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { useState } from "react";
import authStorage from "./app/auth/storage";
import { StatusBar } from "expo-status-bar";
import AuthContext from "./app/auth/context";
export default function App() {
  const [user, setUser] = useState(null);
  const [isReady, setReady] = useState(false);
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (!user) Promise.all([]);
    setUser(user);
    return Promise.all([]);
  };
  if (isReady === false) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setReady(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <>
      {user ? (
        <AuthContext.Provider value={{ user, setUser }}>
          <Drawer />
        </AuthContext.Provider>
      ) : (
        <AuthContext.Provider value={{ user, setUser }}>
          <AuthNavigator />
        </AuthContext.Provider>
      )}
      <StatusBar style="dark" />
    </>
  );
}
