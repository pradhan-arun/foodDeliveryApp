import React, { createContext, useEffect, useState } from 'react';
import  AsyncStorage  from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

const AuthProvider = ({ children, navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    const retrieveData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');

        console.log("retrive data == ", storedUser)
        if (storedUser) {
          setUser(JSON.stringify(storedUser));
        }
      } catch (error) {
        console.log(error);
      }
    };
    retrieveData();
  }, []);

  const login = async (userData) => {
    try {
      await AsyncStorage.setItem('user', userData);
      setUser(userData);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };