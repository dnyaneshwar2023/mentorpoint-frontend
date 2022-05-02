import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import "react-native-gesture-handler";
import AppLoading from "expo-app-loading";

import Drawer from "./app/navigation/Drawer";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { useState } from "react";
import authStorage from "./app/auth/storage";

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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
