import * as SecureStore from "expo-secure-store";

import jwtDecode from "jwt-decode";

const key = "authtoken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error Storing Auth Token");
  }
};

const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync(key);
    return token;
  } catch (error) {
    console.log(error);
  }
};

const getUser = async () => {
  const token = await getToken();
  if (token) {
    return jwtDecode(token);
  }
  return null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log(error);
  }
};

export default {
  storeToken,
  getUser,
  removeToken,
  getToken,
};
